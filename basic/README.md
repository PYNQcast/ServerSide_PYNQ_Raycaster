# basic/ — Minimal End-to-End Stack

**Goal:** prove every layer works together — PYNQ → EC2 → Redis → DynamoDB — in the simplest possible code before building the full version. No SEDA, no C++, just the data flow end to end.

---

## Structure

```
basic/
├── protocol/protocol.py   — packet format (shared by server and client)
├── server/server.py       — UDP game server (runs on EC2)
├── client/sender.py       — node simulator (runs on laptop / PYNQ)
└── sidecar/sidecar.py     — Redis → DynamoDB persistence (runs on EC2)
```
folders seem overkill - but may eventually become a sandpit with required seperation. 
---

## Data flow

```
PYNQ / simulator
      │  UDP 24-byte packet
      ▼
  server.py  ── HSET player:N x y angle ──►  Redis
      │                                           │
      │  UDP game state back                      │  BRPOP game:events (blocks)
      ▼                                           ▼
PYNQ / simulator                           sidecar.py
                                                  │  put_item()
                                                  ▼
                                             DynamoDB
```

Redis sits between server and sidecar so they never block each other — server writes to RAM (µs), sidecar handles DynamoDB at its own pace.

---

## EC2 access

```bash
./ssh_ec2.sh          # SSH into EC2 (uses raycastpair.pem)
```

Key: `raycastpair.pem` — must be in repo root, never committed (in `.gitignore`).
EC2 IP: `18.175.238.148`
EC2 user: `ubuntu`

---

## Running

From repo root on your laptop, use the dev tmux session:

```bash
./dev.sh
```

Opens 4 panes — server, sidecar (both SSH into EC2), client 1, client 2. Commands are pre-filled, press Enter in each pane in this order: **sidecar → server → client 1 → client 2**.

To kill stale EC2 processes:
```bash
ssh -i ./raycastpair.pem ubuntu@18.175.238.148 'pkill -f server.py; pkill -f sidecar.py'
```

---

## DynamoDB table

Table: `pynq-raycaster-matches`
Partition key: `match_id` (String)
Sort key: `record_type` (String)
Region: `eu-west-2`
Credentials: IAM role attached to EC2 instance (no keys needed).

---

## Expected output

**server:** `New player 1 ... (total: 2)` then `Redis event: {"event":"match_start",...}`
**sidecar:** `DynamoDB: wrote match record match-... with 2 player(s)`
**clients:** `Game state — 2 player(s): player 0 x=1.00 ...`

---

## What this proves

| Layer | Evidence |
|---|---|
| PYNQ → EC2 UDP | Player positions appear in server stdout |
| EC2 → PYNQ UDP | Clients print each other's positions |
| Redis writes | `redis-cli HGETALL player:0` returns values |
| Redis → sidecar | Sidecar wakes on `match_start` event |
| DynamoDB write | Record visible in AWS console |
