# t3_broadcaster.py - T3: drains broadcast_queue -> UDP sendto all nodes.
# Must reuse T1's shared_transport so packets leave from EC2:9000; a random
# ephemeral source port would be silently dropped by WSL NAT.

import asyncio


# Fallback send-only protocol; only instantiated when no shared socket is passed.
class BroadcasterProtocol(asyncio.DatagramProtocol):

    def error_received(self, exc):
        print(f"[Broadcaster] send error: {exc}")


# Dequeues broadcast messages and fans each one out to all target addresses
class Broadcaster:

    def __init__(self, broadcast_queue: asyncio.Queue, shared_transport=None):
        self.queue     = broadcast_queue
        self.transport = None
        self._shared   = shared_transport  # T1's port-9000 socket, if provided

    async def run(self):
        loop = asyncio.get_running_loop()

        if self._shared is not None:
            self.transport = self._shared
            print("[T3 Broadcaster] reusing T1 socket (port 9000)")
        else:
            # Fallback: own socket, source port will be random, use with care
            self.transport, _ = await loop.create_datagram_endpoint(
                BroadcasterProtocol,
                family=2,   # AF_INET
            )
            print("[T3 Broadcaster] opened own socket (no shared transport)")

        print("[T3 Broadcaster] ready")

        while True:
            msg = await self.queue.get()
            await self._send_udp(msg)

    async def _send_udp(self, msg: dict):
        data    = msg["data"]
        targets = msg["targets"]
        for addr in targets:
            try:
                self.transport.sendto(data, addr)
            except Exception as e:
                print(f"[T3] sendto {addr} failed: {e}")
