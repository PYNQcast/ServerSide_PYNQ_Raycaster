# ec2/server/server.py
#
# Python SEDA game server : entry point.
#
# Same 4-stage pipeline as the classic C++ SEDA design, implemented as
# asyncio tasks connected by asyncio.Queue objects instead of threads and
# lock-free queues. The architecture is identical; the language is simpler.
#
# Pipeline:
#   T1 UDPReceiver  → packet_queue   → T2 GameTick
#   T2 GameTick     → broadcast_queue → T3 Broadcaster
#   T2 GameTick     → write_queue    → T4 RedisWriter
#
# Run on EC2:
#   python server.py
#
# Requires: pip install redis

import asyncio
import sys
import os

sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', '..', 'interfacing'))

from udp_receiver  import UDPReceiver
from game_tick     import GameTick
from broadcaster   import Broadcaster
from redis_writer  import RedisWriter

UDP_PORT  = 9000
TICK_RATE = 20   # Hz

async def main():
    # Three queues connecting the four stages
    packet_queue    = asyncio.Queue()   # RawPacket dicts: {data, addr}
    broadcast_queue = asyncio.Queue()   # BroadcastMsg dicts: {data, targets}
    write_queue     = asyncio.Queue()   # WriteMsg dicts: {key, value}

    receiver   = UDPReceiver(packet_queue)
    ticker     = GameTick(packet_queue, broadcast_queue, write_queue, TICK_RATE)
    broadcaster = Broadcaster(broadcast_queue)
    writer     = RedisWriter(write_queue)

    print(f"Starting SEDA game server on UDP port {UDP_PORT}")

    await asyncio.gather(
        receiver.run(UDP_PORT),
        ticker.run(),
        broadcaster.run(),
        writer.run(),
    )

if __name__ == "__main__":
    asyncio.run(main())
