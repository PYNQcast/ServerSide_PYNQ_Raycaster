# t1_udp_receiver.py - T1: receives UDP packets on port 9000 -> packet_queue.
# Socket is shared with T3 so broadcasts leave from EC2:9000, satisfying WSL NAT.
# SO_RCVBUF enlarged to 4 MB to absorb bursts from multiple PYNQ boards.

import asyncio
import socket

RECV_BUF = 4 * 1024 * 1024  # 4 MB receive buffer


# asyncio DatagramProtocol; enqueues every inbound packet for T2.
class UDPReceiverProtocol(asyncio.DatagramProtocol):

    def __init__(self, queue: asyncio.Queue):
        self.queue = queue
        self._debug_seen = 0

    def datagram_received(self, data: bytes, addr: tuple):
        if self._debug_seen < 12:
            print(f"[T1] udp from {addr} len={len(data)}")
            self._debug_seen += 1
        self.queue.put_nowait({"data": data, "addr": addr})

    def error_received(self, exc: Exception):
        print(f"[UDPReceiver] error: {exc}")


# Owns the port-9000 UDP socket; exposes transport for T3 and T2 to reuse
class UDPReceiver:

    def __init__(self, packet_queue: asyncio.Queue):
        self.queue     = packet_queue
        self.transport = None  # set by bind(), shared with T3 and T2

    # Create the socket, enlarge the receive buffer, then hand off to the event loop
    async def bind(self, port: int):
        loop = asyncio.get_running_loop()
        self.transport, _ = await loop.create_datagram_endpoint(
            lambda: UDPReceiverProtocol(self.queue),
            local_addr=("0.0.0.0", port),
        )
        sock = self.transport.get_extra_info('socket')
        sock.setsockopt(socket.SOL_SOCKET, socket.SO_RCVBUF, RECV_BUF)
        actual = sock.getsockopt(socket.SOL_SOCKET, socket.SO_RCVBUF)
        print(f"[T1 UDPReceiver] listening on UDP :{port}  recv_buf={actual//1024}KB")

    # Keep the coroutine alive; closing the transport shuts down the socket
    async def run(self):
        try:
            await asyncio.sleep(float("inf"))
        finally:
            if self.transport:
                self.transport.close()
