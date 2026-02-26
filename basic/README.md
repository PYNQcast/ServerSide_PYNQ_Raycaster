# basic/ — Minimal End-to-End Proof of Concept

**Goal:** prove every part of the system works together — PYNQ → EC2 → Redis → DynamoDB — in the simplest possible code before building the full version.

No SEDA. No queues. No C++. Just the flow, end to end, in the fewest lines possible.

---

## What's here

```
basic/
├── protocol/
│   └── protocol.py   — packet format (shared by server and client)
├── server/
│   └── server.py     — single-file Python UDP server (runs on EC2)
├── client/
│   └── sender.py     — single-file Python node simulator (runs on laptop / PYNQ)
└── sidecar/
    └── sidecar.py    — single-file Python sidecar (Redis → DynamoDB)
```

---

## The full data flow

```
PYNQ / simulator
      │  UDP packet (24 bytes)
      ▼
  server.py  ──── HSET player:0 x y angle ────►  Redis
      │                                               │
      │  UDP game state back                          │  BRPOP game:events (blocks)
      ▼                                               ▼
PYNQ / simulator                               sidecar.py
                                                      │
                                                      │  put_item()
                                                      ▼
                                                 DynamoDB
```

- **server.py** — receives UDP, merges state, echoes back, writes to Redis
- **sidecar.py** — sleeps until Redis has an event, then writes to DynamoDB
- The two processes never talk directly — Redis is the handoff

---

## How to run

### Prerequisites

On EC2:
```bash
pip install redis boto3
```

Redis must be running locally or use your ElastiCache endpoint.
DynamoDB table `fpga-raycaster` must exist (see `infra/setup/setup_dynamodb.md`).

---

### Step 1 — Start the sidecar (on EC2)

```bash
python basic/sidecar/sidecar.py
```

It blocks here waiting for events. Leave it running.

---

### Step 2 — Start the server (on EC2)

```bash
python basic/server/server.py
```

Make sure EC2 security group allows **inbound UDP on port 9000**.

---

### Step 3 — Run two clients (on your laptop or PYNQ)

```bash
# Terminal 1 — edit SERVER_IP in sender.py first
python basic/client/sender.py

# Terminal 2 — second player
python basic/client/sender.py
```

---

### What you should see

**server terminal:**
```
Connected to Redis at 127.0.0.1:6379
Basic game server listening on UDP port 9000
New player 0 from ('x.x.x.x', 12345) (total: 1)
New player 1 from ('x.x.x.x', 12346) (total: 2)
Redis event: {"event":"match_start","players":2}
Player 0  x=1.00  y=2.00  angle=0.00
...
```

**sidecar terminal:**
```
Waiting for events on Redis key 'game:events'...
Received event: match_start
DynamoDB: wrote match record match-1234567890 with 2 player(s)
```

**client terminals:**
```
Sending to <EC2-IP>:9000 at 20 Hz.
  Game state — 2 player(s):
    player 0  x=1.00  y=2.00  angle=0.00
    player 1  x=3.00  y=4.00  angle=1.57
```

---

## What this proves

| Component | Proven by |
|-----------|-----------|
| PYNQ → EC2 UDP | Packets arrive in server stdout |
| EC2 → PYNQ UDP | Clients print the other player's position |
| Binary protocol correct | Both sides decode each other's packets |
| Redis writes | `redis-cli HGET player:0 x` returns a value |
| Redis → sidecar handoff | Sidecar wakes up on match_start event |
| DynamoDB write | Record visible in AWS console |

---

## Next step

Once this works end-to-end, move to `ec2/` — the full server with the SEDA pipeline and C++ game logic module.
