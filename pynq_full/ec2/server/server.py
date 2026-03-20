# server.py - SEDA game server entry point.
#
# Pipeline: T1(recv) -> T2(game loop) -> T3(broadcast) asyncio; T4(Redis) OS thread.
# T1/T3 share one socket so broadcasts leave from EC2:9000, matching the node NAT entry.
#
# Run: python3 ec2/server/server.py

import asyncio
import queue
import sys
import os

sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', '..', 'interfacing'))
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..'))

from t1_udp_receiver import UDPReceiver
from t2_game_tick    import GameTick
from t3_broadcaster  import Broadcaster
from t4_redis_writer import RedisWriter

UDP_PORT  = 9000
TICK_RATE = 60   # Hz

async def main():
    packet_queue    = asyncio.Queue()     # T1 -> T2: raw UDP datagrams
    broadcast_queue = asyncio.Queue()     # T2 -> T3: game state to broadcast
    write_queue     = queue.SimpleQueue() # T2 -> T4: Redis writes (thread-safe)

    receiver = UDPReceiver(packet_queue)
    writer   = RedisWriter(write_queue)

    writer.start()  # T4 daemon thread, runs independently of the event loop

    print(f"[server] SEDA pipeline starting on UDP port {UDP_PORT}")
    print(f"[server] T1/T2/T3: asyncio  |  T4: OS thread")

    # T1 must bind first so receiver.transport is available for T3 and T2 to reuse.
    await receiver.bind(UDP_PORT)

    ticker = GameTick(
        packet_queue,
        broadcast_queue,
        write_queue,
        TICK_RATE,
        udp_transport=receiver.transport,
    )
    broadcaster = Broadcaster(broadcast_queue, shared_transport=receiver.transport)

    await asyncio.gather(
        receiver.run(),
        ticker.run(),
        broadcaster.run(),
    )

if __name__ == "__main__":
    asyncio.run(main())
