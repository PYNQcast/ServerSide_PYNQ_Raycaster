# ec2/server/game_tick.py
#
# T2 — GameTick
#
# The authoritative game loop. Runs at a fixed tick rate (20 Hz = every 50ms).
# Each tick:
#   1. Drain all packets from packet_queue
#   2. Deserialise and validate each NodePacket
#   3. Update player state
#   4. (TODO) call game_logic C++ binary for physics / visibility checks
#   5. Push merged state to broadcast_queue (→ T3)
#   6. Push state update to write_queue    (→ T4 Redis)
#
# Queue input:  {"data": bytes, "addr": (ip, port)}
# Queue output: {"data": bytes, "targets": [(ip, port), ...]}  → broadcast_queue
#               {"key": str, "value": str}                     → write_queue

import asyncio
import time
import sys
import os

sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', '..', 'interfacing'))
from protocol import (
    unpack_header, unpack_player_entries,
    pack_node_packet,
    PKT_STATE_UPDATE, PKT_REGISTER, PKT_HEARTBEAT,
    NODE_FMT, NODE_SIZE, HEADER_SIZE,
)
import struct

class GameTick:
    def __init__(self, packet_queue, broadcast_queue, write_queue, tick_rate=20):
        self.packet_queue    = packet_queue
        self.broadcast_queue = broadcast_queue
        self.write_queue     = write_queue
        self.interval        = 1.0 / tick_rate

        # Simple player state: keyed by (ip, port)
        # TODO: replace with NodeManager for proper registration + player_id assignment
        self.players = {}   # addr → {player_id, x, y, angle, flags}
        self.next_id = 0

    async def run(self):
        print(f"[T2 GameTick] running at {1/self.interval:.0f} Hz")
        while True:
            tick_start = time.monotonic()

            await self._drain_packets()
            await self._tick()
            await self._push_broadcast()
            await self._push_redis_writes()

            # Sleep for remainder of tick window
            elapsed = time.monotonic() - tick_start
            sleep_for = max(0.0, self.interval - elapsed)
            await asyncio.sleep(sleep_for)

    async def _drain_packets(self):
        """Pull all available packets off the queue without blocking."""
        while True:
            try:
                raw = self.packet_queue.get_nowait()
            except asyncio.QueueEmpty:
                break
            self._process_packet(raw)

    def _process_packet(self, raw: dict):
        data = raw["data"]
        addr = raw["addr"]

        if len(data) < NODE_SIZE:
            return  # too short to be a NodePacket

        # TODO: use NodeManager to handle REGISTER packets properly
        # For now, auto-register any sender
        if addr not in self.players:
            player_id = self.next_id
            self.next_id += 1
            self.players[addr] = {"player_id": player_id, "x": 0.0, "y": 0.0,
                                   "angle": 0.0, "flags": 0}
            print(f"[T2] new player {player_id} from {addr}")

        # Deserialise NodePacket
        pkt_type, seq, timestamp, x, y, angle, flags = struct.unpack_from('<HHIfffB', data)

        # TODO: call game_logic C++ binary to validate move (anti-cheat / wall check)
        # e.g. valid = game_logic.validate_move(prev_x, prev_y, x, y, dt)

        # Update state
        p = self.players[addr]
        p["x"]     = x
        p["y"]     = y
        p["angle"] = angle
        p["flags"] = flags

    async def _tick(self):
        # TODO: check tag/proximity using game_logic C++ binary
        # e.g. dist = game_logic.check_proximity(p1, p2)
        # TODO: check line-of-sight with game_logic.is_visible(p1, p2, map)
        # TODO: detect match-end condition, push game-end event to write_queue
        pass

    async def _push_broadcast(self):
        if not self.players:
            return

        # Build GAME_STATE packet: 8-byte header + 14 bytes per player
        # TODO: use pack helpers from protocol.py when server-side pack is added
        header  = struct.pack('<HHI', 0x0002, 0, int(time.time() * 1000) & 0xFFFFFFFF)
        entries = b""
        for p in self.players.values():
            entries += struct.pack('<BfffBx',
                                   p["player_id"], p["x"], p["y"], p["angle"], p["flags"])

        msg = {
            "data":    header + entries,
            "targets": list(self.players.keys()),
        }
        await self.broadcast_queue.put(msg)

    async def _push_redis_writes(self):
        for addr, p in self.players.items():
            key   = f"player:{p['player_id']}"
            value = f"x={p['x']:.4f} y={p['y']:.4f} angle={p['angle']:.4f}"
            await self.write_queue.put({"key": key, "value": value})
