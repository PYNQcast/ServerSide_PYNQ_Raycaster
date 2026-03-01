# ec2/server/broadcaster.py
#
# T3 : Broadcaster
#
# Drains broadcast_queue and sends the merged game state back to all
# known PYNQ nodes via UDP.
#
# Also the right place to add WebSocket push to the dashboard : same
# game state packet, different transport.
#
# Queue input: {"data": bytes, "targets": [(ip, port), ...]}

import asyncio

class BroadcasterProtocol(asyncio.DatagramProtocol):
    """Minimal send-only UDP transport for outgoing broadcasts."""
    def error_received(self, exc):
        print(f"[Broadcaster] send error: {exc}")


class Broadcaster:
    def __init__(self, broadcast_queue: asyncio.Queue):
        self.queue     = broadcast_queue
        self.transport = None

    async def run(self):
        loop = asyncio.get_running_loop()

        # Open a separate UDP socket for sending
        self.transport, _ = await loop.create_datagram_endpoint(
            BroadcasterProtocol,
            family=2,   # AF_INET
        )

        print("[T3 Broadcaster] ready")

        while True:
            msg = await self.queue.get()
            await self._send_udp(msg)
            # TODO: await self._send_websocket(msg)  : push same state to dashboard

    async def _send_udp(self, msg: dict):
        data    = msg["data"]
        targets = msg["targets"]
        for addr in targets:
            try:
                self.transport.sendto(data, addr)
            except Exception as e:
                print(f"[T3] sendto {addr} failed: {e}")

    async def _send_websocket(self, msg: dict):
        # TODO: serialise msg["data"] as JSON and push to connected WebSocket clients
        # Options: websockets library, or aiohttp WebSocket server
        pass
