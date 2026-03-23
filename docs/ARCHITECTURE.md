# Architecture

## Runtime flow

```
PYNQ boards / node simulators
  → UDP 9000
  → EC2 reactor server (SEDA-inspired)
       T1  UDP receive         (asyncio)
       T2  20 Hz game tick     (asyncio)  ← authoritative state
       T3  broadcast to nodes  (asyncio)  ← shares T1 socket
       T4  Redis writes        (OS thread)
  → Redis localhost:6379 (hot)
  → sidecar process
       → DynamoDB  (warm match metadata)
       → S3        (cold replays + DDB archive)
       → SNS → Lambda (post-match summary)

browser → monitor.py → Redis / DynamoDB / S3
```

## Reactor pipeline (SEDA-inspired)

Four stages communicate only through queues; no direct calls between stages.

```
T1 ──packet_queue──► T2 ──broadcast_queue──► T3
                      │
                 write_queue (thread boundary)
                      ▼
                      T4  (OS thread, redis-py)
```

- **T1** buffers raw datagrams so T2 never blocks on `recvfrom`.
- **T2** owns all authoritative state. 20 Hz fixed-rate tick: drain packet queue, game logic, push to broadcast and write queues.
- **T3** sends `PKT_GAME_STATE` to every registered node using the same socket T1 bound. Shared socket is critical for NAT; see [PERFORMANCE.md](PERFORMANCE.md).
- **T4** is the only real thread. It isolates blocking `redis-py` calls so Redis latency never stalls a tick. Drains its queue in batches and pipelines all HSETs into a single round-trip.

The sidecar and monitor are separate processes. They communicate with the server exclusively through Redis; no direct IPC.

## Storage tiers

| Tier | Store | Latency | Contents |
|------|-------|---------|----------|
| Hot | Redis (EC2 localhost) | < 1 ms | Live player state, event queues, control pub/sub |
| Warm | DynamoDB | 5-20 ms | Recent match metadata, per-match tag rows, replay pointers |
| Cold | S3 | 50-200 ms | Compressed NDJSON replays, archived DDB rows |

Retention: sidecar archives older DDB rows to S3 before deleting them. S3 paths: `replays/year=YYYY/month=MM/{match_id}.ndjson.gz`.

## Sidecar

Reads `game:seda-events` and `game:seda-replay` from Redis via `BRPOP`. Writes match rows to DynamoDB (`META`, `TAG#N`), uploads replay files to S3, publishes `match_end` to SNS. Completely separate process; AWS latency never touches the game loop.

## Repo layout

```
sim_full/            # simulator stack (software nodes, no hardware needed)
  ec2/               # reactor server, sidecar, monitor
  interfacing_+_sim/ # protocol.py (sim source of truth), node_simulator.py

pynq_full/           # PYNQ board stack (active development target, will diverge)
  ec2/               # reactor server, sidecar, monitor, game_logic/ (Python)
  interfacing/       # protocol.py (PYNQ source of truth; edit this one)

datastore/           # shared cloud infra: DynamoDB schemas, Lambda, S3, Redis config
dashboard/           # standalone dashboard assets
tests/               # protocol + integration tests
docs/                # this folder
dev.sh / pynq_dev.sh # one-command launch scripts (see RUNNING.md)
raycastpair.pem      # EC2 SSH key (gitignored)
```

> [!IMPORTANT]
> There are two separate protocol files. `pynq_full/interfacing/protocol.py` is the active source of truth for PYNQ development. `sim_full/interfacing_+_sim/protocol.py` is for the simulator stack. Edit the right one.
