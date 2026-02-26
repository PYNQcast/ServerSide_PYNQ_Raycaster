# Concurrency & Language Design

## What is a tick?

A tick is one complete cycle of the game loop. Every tick the server:

1. Reads all packets that arrived since the last tick
2. Updates every player's position
3. Calls C++ game_logic for physics / visibility checks
4. Sends the new game state back to all nodes

We run at **20 Hz** — 20 ticks per second, one tick every **50 ms**. Think of it like a heartbeat. The game only "moves" at the tick rate, not continuously. Between ticks, the server is sleeping.

Why 20 Hz? It's a common game server rate. Fast enough that movement feels smooth. Slow enough that a t2.micro can easily keep up, and that UDP packet volume stays low (2 nodes × 20 packets/sec = 40 packets/sec total inbound).

```
time ──────────────────────────────────────────────────────►

 tick 1          tick 2          tick 3
 │← 50ms →│← 50ms →│← 50ms →│
 ▼               ▼               ▼
[recv+logic+send][recv+logic+send][recv+logic+send]
        │sleep│          │sleep│          │sleep│
```

If the logic takes 5 ms, the task sleeps for 45 ms. If it ever takes more than 50 ms, the tick has overrun — the next tick is late.

---

## Why Python for the server, C++ for game logic?

### Python game server (`ec2/server/`)

The server's hot path — receive packet, update state, send response — runs 20 times per second. The operations are:

- UDP recv (asyncio DatagramProtocol — non-blocking)
- Packet deserialisation (struct.unpack — fast)
- State merge (dict operations — fast)
- UDP send (asyncio sendto — non-blocking)
- Redis write (redis.asyncio — non-blocking)

None of these are CPU-bound. asyncio handles all of them efficiently without threads. Python is the right tool: fast iteration, simple deployment, and boto3 / redis-py just work.

### C++ game logic (`ec2/game_logic/`)

Ray casting and line-of-sight are CPU-heavy inner loops. A raycaster fires hundreds of rays per frame, stepping through map cells one by one. Python would be 10–100x slower for this. C++ keeps these loops fast while Python handles all the I/O and AWS plumbing.

This is the same pattern as NumPy — Python orchestrates, C++ does the maths.

**Rule of thumb:** C++ owns the compute. Python owns the I/O and AWS.

### Python sidecar (`sidecar/`)

AWS operations (DynamoDB writes, S3 uploads, SNS publishes) happen once per match. Latency of 10–100 ms is fine. The sidecar is a completely separate process — if it crashes, the game server keeps running.

---

## SEDA — what it is and why it's the industry standard

**SEDA** stands for Staged Event-Driven Architecture. Described in a Berkeley paper in 2001, it has been the dominant model for high-throughput servers ever since.

The core idea: split processing into **stages**, each with its own thread (or task) and its own **queue**. Stages communicate only through those queues — they never call each other directly.

```
Stage A → [queue] → Stage B → [queue] → Stage C
```

This is exactly what we've built. Our stages are the 4 asyncio tasks; our queues are `asyncio.Queue` instances.

### Why SEDA became the standard

Before SEDA, servers used one of two models:

**Thread-per-connection** — every client gets its own thread. Simple, but threads are expensive (~1–8 MB stack each). With 10,000 connections you run out of memory. This is what Apache HTTP Server did, and why it struggled at scale.

**Single-threaded event loop** — one thread, non-blocking I/O, callbacks everywhere. Scales to many connections but a single slow callback stalls everything.

SEDA solved both: threads/tasks are bounded and purposeful (not one-per-client), and blocking operations are isolated in their own stage so they can't stall others.

**Who uses it:**
- Valve's Source engine networking (T1 receive, T2 simulate, T3 send)
- Kafka's broker architecture (each partition is a stage)
- Nginx (worker processes with event loops as stages)
- HFT order routers (receive → risk check → send)

---

## Other concurrency approaches considered

### 1. Full async/await single loop

One asyncio event loop doing everything — no separate tasks.

**Pro:** Simplest possible model.
**Con:** The tick loop timer competes with UDP recv. A slow game_logic call stalls incoming packets. Hard to isolate Redis write latency from the send path.

**Why we didn't:** The 4-task split gives clean isolation without adding meaningful complexity.

### 2. Thread-per-client

Each PYNQ node gets its own Python thread.

**Pro:** Simple per-node logic.
**Con:** Python GIL means threads don't actually parallelise CPU work. Game state is shared — needs locks. Tick synchronisation across threads becomes hard (when do you broadcast combined state?).

**Why we didn't:** GIL negates the benefit. asyncio tasks are cleaner for I/O-bound work.

### 3. Actor model

Every player / node is an actor with its own mailbox. Used by Erlang, Akka.

**Pro:** Scales to thousands of entities, natural fault isolation.
**Con:** Framework overhead. Message-passing latency. Overkill for 2–4 players.

**Why we didn't:** Our pipeline is simpler and easier to understand at this scale.

### 4. Single-thread with SIMD (data-oriented)

One tight CPU loop, SIMD for parallel position updates.

**Pro:** Cache-friendly, deterministic.
**Con:** Any I/O call has to be non-blocking and polled manually. Wrong for a network-heavy server.

**Why we didn't:** The bottleneck is network I/O, not CPU. SIMD would make no measurable difference at 2–4 players.

---

## Summary

| Approach | Used by | Good for | Our verdict |
|----------|---------|----------|-------------|
| SEDA pipeline (ours) | Valve, Kafka, HFT | Fixed-rate game loops, mixed I/O | ✓ Right fit |
| Full async loop | Node.js, Redis | High connection count, I/O-bound | Harder tick isolation |
| Thread-per-client | Early Apache | Very few clients | GIL kills it in Python |
| Actor model | Erlang, Akka | Distributed systems, many entities | Overkill for 2–4 players |
| Single-thread SIMD | Game engines (ECS) | CPU-bound simulation | Wrong bottleneck |
