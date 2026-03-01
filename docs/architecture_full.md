# Architecture Overview

## System Diagram

```
PYNQ Nodes (FPGA)
    │  UDP 9000 (NodePacket, 24 bytes @ 20 Hz)
    ▼
EC2 Game Server (Python asyncio : SEDA)
    ├── T1: UDP Receiver    asyncio DatagramProtocol → packet_queue
    ├── T2: Game Tick       fixed 20 Hz loop, drains queue, calls C++ game_logic
    │         └──► game_logic/ (C++ compiled module)
    │                  ├── raycaster    : ray casting, line-of-sight
    │                  ├── anticheat    : move validation, speed check
    │                  └── node_manager : player registration
    ├── T3: Broadcaster     UDP sendto all nodes + WebSocket to dashboard
    └── T4: Redis Writer    async redis-py writes to ElastiCache
         │
         ▼ TCP 6379
    ElastiCache Redis               (hot state, Tier 1, <1ms)
         │
         ▼ BRPOP on game:events
    Python Sidecar
         ├── DynamoDB               (match results, player profiles, Tier 2)
         ├── S3                     (replay archives, snapshots, Tier 3)
         └── SNS ──► Lambda         (post-game stats processor)

React Dashboard
    │  WebSocket 8080
    └── EC2 Game Server (T3 Broadcaster)
```

## Why Python server + C++ game logic?

The server is Python because it is mostly network plumbing. asyncio handles UDP,
Redis, and WebSocket cleanly : no performance concerns at 2 players / 20 Hz.

The game logic is C++ because ray casting and line-of-sight are CPU-heavy inner
loops. A raycaster fires hundreds of rays per frame; Python would be 10–100x
slower. C++ handles the compute. Python handles everything else.

Same pattern as NumPy: Python orchestrates, C++ does the maths.

## Storage Tiers

| Tier | Service  | Latency  | Retention     | Purpose                        |
|------|----------|----------|---------------|--------------------------------|
| 1    | Redis    | <1ms     | Match only    | Live game state, heartbeats    |
| 2    | DynamoDB | 1-10ms   | Permanent     | Match results, player profiles |
| 3    | S3       | 10-100ms | 90d → Glacier | Replays, snapshots, exports    |

## Protocol

[interfacing/protocol.py](../interfacing/protocol.py) is the single source of
truth for packet format. No C++ protocol.h needed : Python is on both sides.

## Further reading

- [threading_model.md](threading_model.md) : SEDA task pipeline detail
- [concurrency_and_language_design.md](concurrency_and_language_design.md) : why asyncio, why C++ game logic
- [storage_design.md](storage_design.md) : Redis / DynamoDB / S3 key schemas
- [sidecar.md](sidecar.md) : sidecar pattern explained
