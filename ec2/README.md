# ec2/ — Game Server

The real-time game server. Runs on an AWS EC2 t2.micro instance.

**Server:** Python asyncio (SEDA architecture — 4 tasks, 3 queues)
**Game logic:** C++ compiled module (raycaster engine primitives)

---

## Why this split?

The server is Python because it's mostly network plumbing — receive UDP, merge state, send UDP, write Redis. Python asyncio handles this easily and gives us boto3, fast iteration, and simple deployment.

The game logic is C++ because it contains the computationally heavy inner loops — ray casting, line-of-sight, move validation. A real raycaster fires hundreds of rays per frame. Python would be 10–100x slower here. C++ keeps those loops fast while Python handles everything else.

This is the same pattern as NumPy: Python orchestrates, C++ does the maths.

---

## Architecture

```
PYNQ Node ──┐
             ├──► T1 UDPReceiver ──(packet_queue)──► T2 GameTick ──(broadcast_queue)──► T3 Broadcaster ──► PYNQ Nodes
PYNQ Node ──┘                                             │
                                                    calls game_logic/
                                                    (C++ binary/so)
                                                          │
                                              (write_queue)──► T4 RedisWriter ──► Redis
```

All 4 stages run as asyncio tasks. `asyncio.Queue` replaces the lock-free queues from the classic C++ SEDA design — same concept, Python stdlib.

---

## File map

```
ec2/
├── server/
│   ├── server.py          — entry point: spins up 4 asyncio tasks + 3 queues
│   ├── udp_receiver.py    — T1: asyncio DatagramProtocol → packet_queue
│   ├── game_tick.py       — T2: fixed-rate tick, calls game_logic, pushes results [TODO]
│   ├── broadcaster.py     — T3: UDP sendto all nodes + WebSocket to dashboard     [TODO]
│   └── redis_writer.py    — T4: async Redis writes via redis.asyncio              [TODO]
│
└── game_logic/            — C++ raycaster engine (compiled separately)
    ├── raycaster.cpp/h    — ray_intersects_wall, is_visible, check_proximity      [TODO]
    ├── anticheat.cpp/h    — validate_move: speed + wall penetration check         [TODO]
    ├── node_manager.cpp/h — register nodes, assign player IDs                     [TODO]
    ├── state.h            — PlayerState, GameState structs
    ├── protocol.h         — C++ packet structs (for game_logic binary only)
    └── CMakeLists.txt     — builds as shared lib (.so) or standalone binary
```

---

## Running

```bash
pip install redis
python ec2/server/server.py
```

Requires Redis running locally, or set `REDIS_HOST` in `redis_writer.py` to your ElastiCache endpoint.

---

## Building game_logic (C++)

```bash
cd ec2/game_logic && mkdir -p build && cd build
cmake .. && make -j$(nproc)
```

Requires: `sudo apt install cmake g++`

---

## What needs implementing (in order)

1. `server/game_tick.py` — deserialise packets properly, register players via node_manager
2. `server/redis_writer.py` — connect redis.asyncio, implement HSET writes
3. `server/broadcaster.py` — add WebSocket push for dashboard
4. `game_logic/raycaster.cpp` — DDA ray-march, is_visible, check_proximity
5. `game_logic/anticheat.cpp` — speed check, wall penetration validation
6. Wire T2 → game_logic: call compiled C++ from Python game_tick.py

See [Plan.md](../Plan.md) for the full MVP order.
