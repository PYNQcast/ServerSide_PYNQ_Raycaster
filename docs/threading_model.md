# Threading Model (SEDA Pipeline)

The server uses 4 asyncio tasks connected by asyncio.Queue objects.
No shared mutable state between tasks. Each task does exactly one job.

## Pipeline

```
  PYNQ Node 1 ──┐
                 │  UDP packets (24 bytes, 20 Hz each)
  PYNQ Node 2 ──┤
                 ▼
        ┌─────────────────────┐
        │  T1: UDP Receiver   │  asyncio DatagramProtocol
        │  udp_receiver.py    │  puts raw bytes onto packet_queue
        └──────────┬──────────┘
                   │ packet_queue  {"data": bytes, "addr": (ip, port)}
                   ▼
        ┌─────────────────────┐
        │  T2: Game Tick      │  runs at 20 Hz on a fixed timer
        │  game_tick.py       │  • deserialise NodePacket
        │                     │  • call C++ game_logic (anticheat, raycaster)
        │  owns player state  │  • merge positions
        │  (not shared)       │  • detect match events
        └────────┬──────┬─────┘
                 │      │
  broadcast_queue│      │write_queue
                 │      │
        ┌────────┘      └────────┐
        ▼                        ▼
┌──────────────────┐   ┌──────────────────┐
│  T3: Broadcaster │   │  T4: Redis Writer│
│  broadcaster.py  │   │  redis_writer.py │
│                  │   │                  │
│  sendto Node 1   │   │  HSET player:0   │
│  sendto Node 2   │   │  HSET player:1   │
│  WebSocket push  │   │  LPUSH events    │
│  → Dashboard     │   │  → ElastiCache   │
└──────────────────┘   └──────────────────┘
```

**Currently:** 2 nodes (2 players). The design scales to N nodes with no code changes — T1 accepts any sender, T3 iterates the node registry.

## asyncio tasks vs C++ threads — same concept

The classic SEDA design used C++ threads and lock-free queues. The Python version uses asyncio tasks and asyncio.Queue. The architecture is identical — only the implementation differs:

| Classic C++ SEDA             | Python asyncio SEDA         |
|------------------------------|-----------------------------|
| std::thread                  | asyncio task (coroutine)    |
| moodycamel::ConcurrentQueue  | asyncio.Queue               |
| recvfrom() blocking loop     | asyncio DatagramProtocol    |
| hiredis pipeline             | redis.asyncio               |
| lock-free atomic ops         | cooperative yield (await)   |

## Why 4 tasks?

Each task has one operation that would block the others if not isolated:

| Task | Blocking operation           | Effect if not isolated              |
|------|------------------------------|-------------------------------------|
| T1   | Waiting for UDP packets      | Would stall game logic              |
| T2   | Sleeping until next tick     | Would stall broadcasts              |
| T3   | sendto() per node, WebSocket | Slow client would delay ticks       |
| T4   | Network RTT to ElastiCache   | Redis latency would delay broadcasts|

## Why asyncio not threads?

Python threads are limited by the GIL — only one thread runs Python bytecode at a time. For I/O-bound work (UDP recv, Redis writes), asyncio is simpler and avoids GIL contention. All 4 tasks run cooperatively on one event loop, yielding at every `await`.

The C++ game_logic module is called from T2 as native code — it is not affected by the GIL.

## Data flow is one-directional — that's the key

T2 puts a message on broadcast_queue and immediately moves on to the next tick. It never waits for T3 to finish. If T3 falls behind (e.g. a slow WebSocket client), its queue grows — but T2's 20 Hz timing is completely unaffected. Tasks are **decoupled in time**, not just in code.

## Latency trade-off

A packet arriving at T1 waits up to one tick (50 ms) before T2 processes it, then waits for T3 to pick it up. Worst-case server round-trip is ~100 ms. For an FPGA raycaster game this is acceptable — human reaction time is 150–250 ms.
