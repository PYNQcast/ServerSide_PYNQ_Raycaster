# FPGA Raycaster : Game Server

Server-side repository for a multiplayer FPGA raycaster game. PYNQ nodes run the raycasting renderer on FPGA; this server handles game logic, state synchronisation, and persistence.

Each folder has a README explaining what it does, why it exists, and what needs building. Read those first.

---

## Architecture

```
PYNQ Node ──┐
             ├──► EC2 Python Server (SEDA) ──► Redis ──► Python Sidecar ──► DynamoDB / S3 / SNS
PYNQ Node ──┘         │                                         ▲
                  game_logic/                           watches for events
                  (C++ binary)
                       │
                  ray casting
                  anti-cheat
                  visibility
```

**Server:** Python asyncio SEDA pipeline : 4 tasks, 3 queues, no blocking on the hot path

**Game logic:** C++ compiled module : ray casting, line-of-sight, move validation. CPU-heavy inner loops that Python can't do fast enough. Called from Python T2 (game tick). Same pattern as NumPy.

**Sidecar:** Python : watches Redis, writes to AWS. Decoupled from server so AWS latency never blocks the game loop.

---

## Stack

- **Python game server** (EC2) : asyncio SEDA pipeline, UDP, redis-py
- **C++ game logic** (EC2) : raycaster engine: ray casting, visibility, anti-cheat
- **Python sidecar** (EC2) : Redis → DynamoDB + S3 + SNS on match end
- **AWS** : EC2 t2.micro, ElastiCache Redis, DynamoDB, S3, SNS, Lambda

---

## What's here

```
ServerSide_PYNQ_Raycaster/
├── basic/          : minimal single-file POC: prove the pipes work before building full version
├── ec2/            : live runtime: server, monitor, EC2 sidecar
├── interfacing_+_sim/ : shared protocol + node simulator + PYNQ guide
├── sidecar/        : older standalone sidecar prototype
├── docs/           : architecture, threading, storage design
├── infra/          : EC2 / Redis / DynamoDB / S3 setup guides
├── dashboard/      : older dashboard notes (monitor now lives under ec2/monitor/)
├── dynamodb/       : table design and access patterns
├── s3/             : replay storage
├── lambda/         : post-game stats processor
└── redis/          : key schema reference
```

---

## Where to start

For day-to-day development, start with `dev.sh`.

- `dev.sh` is the main local entry point
- it launches the live workflow around `ec2/`
- it auto-starts the EC2 server, sidecar, monitor, and Redis stats
- you only need to press `Enter` in the two node-simulator tmux panes

If you want the live system, start with:

- `dev.sh`
- `ec2/`

If you want the simplest reference flow, use:

- `basic/`

[Plan.md](Plan.md) is the original MVP build plan. [TODO.md](TODO.md) is the
current continuation list.

---

## Running

```bash
# Main dev flow
./dev.sh

# Basic proof of concept
python basic/server/server.py
python basic/client/sender.py

# Manual live server pieces (only if you are not using dev.sh)
python ec2/server/server.py

# Manual live EC2 sidecar
python ec2/sidecar/sidecar.py
```

---

## Current continuation priorities

The system is now beyond the original MVP: it has a live monitor, S3 replay storage,
SNS/Lambda post-match processing, and a managed hot / warm / cold storage split:

- Redis = hot operational state
- DynamoDB = warm recent-match metadata
- S3 = cold replay and archive storage

For teammates continuing the project, these are the most pragmatic next improvements.

### 1. Add packet sequence validation at UDP ingress

Why:
Protect the game loop from stale, replayed, or out-of-order node packets.

How:
- Track the last accepted `seq_num` per player
- Reject packets whose `seq_num` is not newer than the last accepted one
- Reset the per-player sequence baseline when that player re-registers

Effort:
1-2 hours

Impact:
High. Good hardening with low implementation risk.

Fits:
Week 1 protocol hardening

### 2. Cache recent match summaries in Redis

Why:
The monitor currently polls DynamoDB every 2 seconds and performs a full `META`
scan to build the recent-match list. This is acceptable now, but it is still the
weakest read pattern in the current stack.

How:
- On `match_end`, have the sidecar write a compact recent-match summary into
  `game:recent-matches` in Redis
- Let the monitor read Redis first for the recent-match panel
- Fall back to DynamoDB only on startup, periodic refresh, or explicit reload

Effort:
2-3 hours

Impact:
Medium. Reduces warm-tier read pressure and makes the monitor cheaper and cleaner.

Fits:
Week 2 optimization

### 3. Offload replay compression from the sidecar hot path

Why:
Replay NDJSON compression currently happens inline during `match_end` handling.
As matches get longer, that can delay the sidecar from returning to Redis queue
consumption.

How:
- Queue replay compression + upload work to a background thread or executor
- Let the sidecar main loop return immediately to event consumption
- Track upload completion and failure separately from gameplay completion

Effort:
3-4 hours

Impact:
Medium. Improves sidecar scalability and keeps post-match handling smoother under load.

Fits:
Week 2-3 load hardening

### 4. Add CloudWatch metrics for real observability

Why:
The monitor gives good live visibility, but there is still no durable metrics trail
for latency, throughput, or AWS-side failures.

How:
- Emit tick latency from T2
- Emit Redis write latency from T4
- Emit sidecar lag / queue age from the sidecar
- Emit replay load or monitor query latency from the monitor backend

Effort:
2-3 hours

Impact:
Medium. Makes bottlenecks measurable and easier to demonstrate in testing.

Fits:
Week 2 observability pass
