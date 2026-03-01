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
├── ec2/            : full game server: Python SEDA + C++ game logic
├── interfacing/    : protocol.py + node simulator (test without PYNQ hardware)
├── sidecar/        : Python AWS bridge (Redis → DynamoDB / S3 / SNS)
├── docs/           : architecture, threading, storage design
├── infra/          : EC2 / Redis / DynamoDB / S3 setup guides
├── dashboard/      : WebSocket frontend (build last)
├── dynamodb/       : table design and access patterns
├── s3/             : replay storage
├── lambda/         : post-game stats processor
└── redis/          : key schema reference
```

---

## Where to start

**Start with `basic/`** : single Python file server, single Python file client, single Python file sidecar. Run it end-to-end to prove PYNQ → EC2 → Redis → DynamoDB works before touching the full server.

**Then move to `ec2/`** : implement the 4 SEDA tasks in order (T1 → T2 → T3 → T4), then wire in the C++ game logic module.

See [Plan.md](Plan.md) for the parallel workstreams and MVP milestone.

---

## Running

```bash
# Basic proof of concept
python basic/server/server.py
python basic/client/sender.py

# Full server (once implemented)
python ec2/server/server.py

# Sidecar (alongside either server)
python sidecar/sidecar.py
```
