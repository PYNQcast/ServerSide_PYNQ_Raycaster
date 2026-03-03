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
#
# bind() must be called before run() so that server.py can pass
# self.transport to T3 Broadcaster — both share the port-9000 socket
# so that broadcast replies arrive at the client from EC2:9000,
# matching the NAT mapping the node's outbound sendto created.

import asyncio
import socket

RECV_BUF = 4 * 1024 * 1024  # 4 MB — prevents kernel-level drops under burst traffic

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
        self.queue     = packet_queue
        self.transport = None   # set by bind(); shared with T3 Broadcaster

    async def bind(self, port: int):
        """Bind the UDP socket. Must be called before run()."""
        loop = asyncio.get_running_loop()
        self.transport, _ = await loop.create_datagram_endpoint(
            lambda: UDPReceiverProtocol(self.queue),
            local_addr=("0.0.0.0", port),
        )
        sock = self.transport.get_extra_info('socket')
        sock.setsockopt(socket.SOL_SOCKET, socket.SO_RCVBUF, RECV_BUF)
        actual = sock.getsockopt(socket.SOL_SOCKET, socket.SO_RCVBUF)
        print(f"[T1 UDPReceiver] listening on UDP :{port}  recv_buf={actual//1024}KB")

    async def run(self):
        """Keep the socket alive. bind() must have been called first."""
        try:
            await asyncio.sleep(float("inf"))   # run forever
        finally:
            if self.transport:
                self.transport.close()
