# ec2/server/udp_receiver.py
#
# T1 : UDPReceiver
#
# Listens on UDP port 9000. On each incoming packet, pushes a RawPacket
# dict onto packet_queue for T2 (GameTick) to process.
#
# This stage does NO packet parsing : it just receives raw bytes and
# passes them downstream. Parsing happens in T2.
#
# Queue output: {"data": bytes, "addr": (ip, port)}

import asyncio

class UDPReceiverProtocol(asyncio.DatagramProtocol):
    """asyncio UDP transport : called by the event loop on each incoming datagram."""

    def __init__(self, queue: asyncio.Queue):
        self.queue = queue

    def datagram_received(self, data: bytes, addr: tuple):
        # TODO: Possibly : add rate limiting per sender IP here (flood protection)
        self.queue.put_nowait({"data": data, "addr": addr})

    def error_received(self, exc: Exception):
        print(f"[UDPReceiver] error: {exc}")


class UDPReceiver:
    def __init__(self, packet_queue: asyncio.Queue):
        self.queue = packet_queue

    async def run(self, port: int):
        loop = asyncio.get_running_loop()

        # TODO: Possibly: bind to specific interface instead of 0.0.0.0 if needed
        transport, _ = await loop.create_datagram_endpoint(
            lambda: UDPReceiverProtocol(self.queue),
            local_addr=("0.0.0.0", port),
        )

        print(f"[T1 UDPReceiver] listening on UDP :{port}")

        try:
            await asyncio.sleep(float("inf"))   # run forever
        finally:
            transport.close()
