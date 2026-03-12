# pynq_full/interfacing/pynq_client.py — PYNQ-Z1 board client.
#
# Wiring:
#   UDP networking  → protocol.py (same packet format as the EC2 server)
#   PKT_MAP         → row-major tile bytes from the server
#   BRAM writes     → convert map + player pose into the real hardware repo's format
#   HDMI output     → driven autonomously by the bitstream once BRAM is populated
#
# Hardware contract taken from ~/Documents/pynq_raycaster:
#   BRAM base:       0x40000000
#   BRAM range:      0x2000
#   Button GPIO:     0x41200000  [3:0]=button inputs from the Button-control branch
#   Map rows:        32 x 32-bit words at offsets 0x00..0x7C
#   Player position: 0x80  [31:16]=x, [15:0]=y, unsigned Q6.10 tile coords
#   Player angle:    0x84  [11:0]=angle, 0..4095 maps a full turn
#
# Upload to board:
#   scp... etc
#   Make sure raycaster.hwh matches the exact raycaster.bit build.
#
# Run on board:
#   ssh xilinx@<PYNQ_IP>
#   cd /home/xilinx/jupyter_notebooks
#   python3 pynq_client.py --server 3.9.71.204 --port 9000 --overlay raycaster.bit --username louis --mode auto

import asyncio
import socket
import struct
import math
import heapq
import argparse
import sys
import os
import time

sys.path.insert(0, os.path.dirname(__file__))
from protocol import (
    # constants
    MOVEMENT_MODE_POSE,
    PKT_REGISTER, PKT_ACK, PKT_GAME_STATE, PKT_MAP, PKT_HEARTBEAT, PKT_BITS_INIT,
    FLAG_SHOOTING, FLAG_TAGGED, FLAG_MATCH_END, FLAG_GHOST,
    GAME_MODE_CHASE_BITS,
    HEADER_SIZE,
    # functions
    pack_node_packet, pack_register_packet, unpack_bits_init_packet, unpack_header,
    unpack_map_packet, unpack_server_packet,
)

# ── Network cadence ───────────────────────────────────────────────────────────

TICK_RATE = 60  # Hz — keep the board client aligned with the server send loop
REGISTER_RETRY_S = 2.0
SERVER_SILENCE_TIMEOUT_S = 3.0

# ── Real hardware BRAM layout ─────────────────────────────────────────────────

HW_BRAM_BASE_ADDR      = 0x40000000
HW_BRAM_RANGE          = 0x2000
HW_GPIO_BASE_ADDR      = 0x41200000
HW_GPIO_RANGE          = 0x10000
HW_GPIO_DATA_OFFSET    = 0x00
HW_MAP_ROWS            = 32
HW_MAP_COLS            = 32
HW_PLAYER_POS_OFFSET   = 0x80
HW_PLAYER_ANGLE_OFFSET = 0x84
HW_ENTITY_COUNT_OFFSET = 0x88
HW_ENTITY_TABLE_OFFSET = 0x8C
HW_ENTITY_STRIDE       = 0x0C
MAX_REMOTE_ENTITIES    = 4
HW_COORD_FRAC_BITS     = 10
HW_ANGLE_STEPS         = 1 << 12
HW_ANGLE_MASK          = HW_ANGLE_STEPS - 1
BUTTON_FORWARD_MASK    = 1 << 0
BUTTON_BACKWARD_MASK   = 1 << 1
BUTTON_TURN_LEFT_MASK  = 1 << 2
BUTTON_TURN_RIGHT_MASK = 1 << 3
MANUAL_MOVE_SPEED      = 1.5
MANUAL_TURN_SPEED      = 0.08
PLAYER_COLLISION_RADIUS = 2.5
AUTO_RUNNER_SPEED = 1.5
AUTO_TAGGER_SPEED = 1.8
AUTO_FALLBACK_SPEED = 1.4
AUTO_RUNNER_EVADE_DISTANCE = 42.0
AUTO_TAGGER_SHOOT_RANGE = 26.0
AUTO_TAGGER_SHOOT_ARC = 0.4
AUTO_TAGGER_SHOOT_PERIOD_TICKS = 12

def _try_import_pynq():
    # Import pynq only when available so laptop-side smoke tests still work.
    try:
        import pynq
        return pynq
    except ImportError:
        return None


# Decode the 4-button GPIO word into movement actions for the local player.
def decode_button_bits(raw_buttons: int):
    return {
        "forward": bool(raw_buttons & BUTTON_FORWARD_MASK),
        "backward": bool(raw_buttons & BUTTON_BACKWARD_MASK),
        "turn_left": bool(raw_buttons & BUTTON_TURN_LEFT_MASK),
        "turn_right": bool(raw_buttons & BUTTON_TURN_RIGHT_MASK),
    }


# Convert the server's flat 32x32 tile bytes into the row-bitpacked BRAM format.
def encode_map_rows_for_bram(width: int, height: int, tiles: bytes):
    if width != HW_MAP_COLS or height != HW_MAP_ROWS:
        raise ValueError(
            f"hardware expects a {HW_MAP_COLS}x{HW_MAP_ROWS} map, got {width}x{height}"
        )
    if len(tiles) != width * height:
        raise ValueError(
            f"expected {width * height} tile bytes, got {len(tiles)}"
        )

    rows = []
    for row in range(height):
        word = 0
        base = row * width
        for col in range(width):
            if tiles[base + col]:
                word |= 1 << col
        rows.append(word)
    return rows

# Convert centred world-space coordinates into unsigned Q6.10 tile coordinates.
def world_to_hw_q6_10(value: float, tile_scale: int, map_dim: int):
    tile_units = (value / tile_scale) + (map_dim / 2.0)
    raw = int(round(tile_units * (1 << HW_COORD_FRAC_BITS)))
    max_raw = (map_dim << HW_COORD_FRAC_BITS) - 1
    return max(0, min(max_raw, raw))

# Map radians onto the FPGA's 12-bit full-turn angle encoding.
def radians_to_hw_angle(angle_radians: float):
    turn = angle_radians % (2.0 * math.pi)
    return int(round(turn * HW_ANGLE_STEPS / (2.0 * math.pi))) & HW_ANGLE_MASK

# Keep every non-local player from PKT_GAME_STATE, including ghosts.
def build_remote_entities(local_player_id, players, *, limit=MAX_REMOTE_ENTITIES):
    entities = []
    for player in players:
        if player["player_id"] == local_player_id:
            continue
        entities.append({
            "active": True,
            "entity_id": player["player_id"],
            "x": player["x"],
            "y": player["y"],
            "angle": player["angle"],
            "flags": player["flags"],
        })
    entities.sort(key=lambda entity: entity["entity_id"])
    return entities[:limit]


def cell_to_world(col: int, row: int, width: int, height: int, tile_scale: int):
    return (
        (col - width / 2.0 + 0.5) * tile_scale,
        (row - height / 2.0 + 0.5) * tile_scale,
    )


def is_walkable(map_state: dict, x: float, y: float,
                radius: float = PLAYER_COLLISION_RADIUS) -> bool:
    width = map_state.get("width", 0)
    height = map_state.get("height", 0)
    tile_scale = map_state.get("tile_scale", 8)
    tiles = map_state.get("tiles", bytearray())
    if width <= 0 or height <= 0 or not tiles or tile_scale <= 0:
        return True

    offsets = [(0.0, 0.0)]
    if radius > 0.0:
        offsets.extend([
            (radius, 0.0), (-radius, 0.0),
            (0.0, radius), (0.0, -radius),
            (radius, radius), (radius, -radius),
            (-radius, radius), (-radius, -radius),
        ])

    for dx, dy in offsets:
        col = int(math.floor(((x + dx) / tile_scale) + (width / 2.0)))
        row = int(math.floor(((y + dy) / tile_scale) + (height / 2.0)))
        if col < 0 or row < 0 or col >= width or row >= height:
            return False
        if tiles[row * width + col]:
            return False
    return True


def resolve_move(map_state: dict, current_x: float, current_y: float,
                 desired_x: float, desired_y: float):
    if is_walkable(map_state, desired_x, desired_y):
        return desired_x, desired_y
    if is_walkable(map_state, desired_x, current_y):
        return desired_x, current_y
    if is_walkable(map_state, current_x, desired_y):
        return current_x, desired_y
    if not is_walkable(map_state, current_x, current_y):
        return current_x, current_y

    low_x, low_y = current_x, current_y
    high_x, high_y = desired_x, desired_y
    for _ in range(10):
        mid_x = (low_x + high_x) / 2.0
        mid_y = (low_y + high_y) / 2.0
        if is_walkable(map_state, mid_x, mid_y):
            low_x, low_y = mid_x, mid_y
        else:
            high_x, high_y = mid_x, mid_y
    return low_x, low_y


def world_to_cell(map_state: dict, x: float, y: float):
    width = map_state.get("width", 0)
    height = map_state.get("height", 0)
    tile_scale = map_state.get("tile_scale", 8)
    if width <= 0 or height <= 0 or tile_scale <= 0:
        return None
    col = int(math.floor((x / tile_scale) + (width / 2.0)))
    row = int(math.floor((y / tile_scale) + (height / 2.0)))
    if col < 0 or row < 0 or col >= width or row >= height:
        return None
    return (col, row)


def cell_is_open(map_state: dict, col: int, row: int) -> bool:
    width = map_state.get("width", 0)
    height = map_state.get("height", 0)
    tiles = map_state.get("tiles", bytearray())
    if col < 0 or row < 0 or col >= width or row >= height:
        return False
    if not tiles:
        return True
    return tiles[row * width + col] == 0


def cell_center_world(map_state: dict, col: int, row: int):
    return cell_to_world(
        col,
        row,
        map_state.get("width", 0),
        map_state.get("height", 0),
        map_state.get("tile_scale", 8),
    )


def nearest_open_cell(map_state: dict, x: float, y: float):
    origin = world_to_cell(map_state, x, y)
    width = map_state.get("width", 0)
    height = map_state.get("height", 0)
    tile_scale = map_state.get("tile_scale", 8)
    if width <= 0 or height <= 0:
        return None

    if origin and cell_is_open(map_state, origin[0], origin[1]):
        return origin

    if origin is None:
        guess_col = min(width - 1, max(0, int(round((x / tile_scale) + (width / 2.0) - 0.5))))
        guess_row = min(height - 1, max(0, int(round((y / tile_scale) + (height / 2.0) - 0.5))))
        origin = (guess_col, guess_row)

    max_radius = max(width, height)
    for radius in range(1, max_radius + 1):
        row_min = max(0, origin[1] - radius)
        row_max = min(height - 1, origin[1] + radius)
        col_min = max(0, origin[0] - radius)
        col_max = min(width - 1, origin[0] + radius)
        for row in range(row_min, row_max + 1):
            for col in range(col_min, col_max + 1):
                if abs(col - origin[0]) != radius and abs(row - origin[1]) != radius:
                    continue
                if cell_is_open(map_state, col, row):
                    return (col, row)
    return None


def build_cell_path(map_state: dict, start_cell, goal_cell):
    if start_cell is None or goal_cell is None:
        return []
    if start_cell == goal_cell:
        return [start_cell]

    width = map_state.get("width", 0)
    height = map_state.get("height", 0)
    if width <= 0 or height <= 0:
        return []

    open_heap = []
    heapq.heappush(open_heap, (0, 0, start_cell))
    came_from = {}
    g_score = {start_cell: 0}
    closed = set()

    while open_heap:
        _, cost_so_far, current = heapq.heappop(open_heap)
        if current in closed:
            continue
        if current == goal_cell:
            path = [current]
            while current in came_from:
                current = came_from[current]
                path.append(current)
            path.reverse()
            return path

        closed.add(current)
        col, row = current
        for next_col, next_row in (
            (col + 1, row),
            (col - 1, row),
            (col, row + 1),
            (col, row - 1),
        ):
            if not cell_is_open(map_state, next_col, next_row):
                continue
            neighbour = (next_col, next_row)
            next_cost = cost_so_far + 1
            if next_cost >= g_score.get(neighbour, 1_000_000):
                continue
            came_from[neighbour] = current
            g_score[neighbour] = next_cost
            heuristic = abs(goal_cell[0] - next_col) + abs(goal_cell[1] - next_row)
            heapq.heappush(open_heap, (next_cost + heuristic, next_cost, neighbour))

    return []


def path_step_target(map_state: dict, current_x: float, current_y: float,
                     target_x: float, target_y: float):
    if map_state.get("width", 0) <= 0 or not map_state.get("tiles"):
        return (target_x, target_y)

    start_cell = nearest_open_cell(map_state, current_x, current_y)
    goal_cell = nearest_open_cell(map_state, target_x, target_y)
    path = build_cell_path(map_state, start_cell, goal_cell)
    if len(path) >= 2:
        return cell_center_world(map_state, path[1][0], path[1][1])
    if len(path) == 1:
        return cell_center_world(map_state, path[0][0], path[0][1])
    return (target_x, target_y)


def wrap_angle(angle: float) -> float:
    while angle <= -math.pi:
        angle += math.pi * 2.0
    while angle > math.pi:
        angle -= math.pi * 2.0
    return angle


def choose_best_step_towards(x: float, y: float, angle: float, map_state: dict,
                             target, move_speed: float):
    desired_angle = math.atan2(target[1] - y, target[0] - x)
    best = None
    offsets = (0.0, 0.35, -0.35, 0.7, -0.7, 1.05, -1.05, math.pi)
    for offset in offsets:
        candidate_angle = wrap_angle(desired_angle + offset)
        desired_x = x + move_speed * math.cos(candidate_angle)
        desired_y = y + move_speed * math.sin(candidate_angle)
        next_x, next_y = resolve_move(map_state, x, y, desired_x, desired_y)
        blocked = next_x == x and next_y == y
        score = ((next_x - target[0]) ** 2 + (next_y - target[1]) ** 2) + (abs(offset) * 3.0)
        if blocked:
            score += 1_000_000
        candidate = (score, next_x, next_y, candidate_angle)
        if best is None or candidate < best:
            best = candidate
    if best is None:
        return x, y, angle, desired_angle
    return best[1], best[2], best[3], desired_angle


def active_bit_positions(bits, bits_mask):
    positions = []
    for index, bit in enumerate(bits or []):
        if bit is None:
            continue
        if (bits_mask & (1 << index)) == 0:
            continue
        positions.append(bit)
    return positions


def compute_evade_target(x: float, y: float, threat_x: float, threat_y: float, distance: float):
    away_x = x - threat_x
    away_y = y - threat_y
    length = math.hypot(away_x, away_y)
    if length < 0.001:
        away_x, away_y, length = 1.0, 0.0, 1.0
    away_x /= length
    away_y /= length
    lateral_x = -away_y
    lateral_y = away_x
    return (
        x + away_x * distance + lateral_x * (distance * 0.35),
        y + away_y * distance + lateral_y * (distance * 0.2),
    )


def choose_auto_objective(x: float, y: float, assigned_player_id, game_mode: int,
                          packet_players, bits, bits_mask: int):
    players = [
        player for player in (packet_players or [])
        if not (player.get("flags", 0) & FLAG_MATCH_END)
    ]
    runner = next((player for player in players if player.get("player_id") == 1), None)
    tagger = next((player for player in players if player.get("player_id") == 2), None)

    if assigned_player_id == 2 and runner:
        return {
            "mode": "chase",
            "target": (float(runner["x"]), float(runner["y"])),
        }

    if assigned_player_id == 1:
        if tagger:
            tagger_dx = float(tagger["x"]) - x
            tagger_dy = float(tagger["y"]) - y
            tagger_dist = math.hypot(tagger_dx, tagger_dy)
            if tagger_dist <= AUTO_RUNNER_EVADE_DISTANCE:
                return {
                    "mode": "evade",
                    "target": compute_evade_target(
                        x, y, float(tagger["x"]), float(tagger["y"]), AUTO_RUNNER_EVADE_DISTANCE,
                    ),
                }
        if game_mode == GAME_MODE_CHASE_BITS:
            candidates = active_bit_positions(bits, bits_mask)
            if candidates:
                target = min(
                    candidates,
                    key=lambda bit: (float(bit[0]) - x) ** 2 + (float(bit[1]) - y) ** 2,
                )
                return {
                    "mode": "collect",
                    "target": (float(target[0]), float(target[1])),
                }
        if tagger:
            return {
                "mode": "kite",
                "target": compute_evade_target(
                    x, y, float(tagger["x"]), float(tagger["y"]), AUTO_RUNNER_EVADE_DISTANCE * 0.7,
                ),
            }

    return {"mode": "roam", "target": None}


def advance_auto_player(x: float, y: float, angle: float, map_state: dict,
                        assigned_player_id, game_mode: int, packet_players,
                        bits, bits_mask: int, tick: int,
                        shoot_period_ticks: int = AUTO_TAGGER_SHOOT_PERIOD_TICKS):
    objective = choose_auto_objective(
        x, y, assigned_player_id, game_mode, packet_players, bits, bits_mask,
    )
    mode = objective["mode"]
    target = objective["target"]

    if mode == "chase":
        move_speed = AUTO_TAGGER_SPEED
    elif mode in {"evade", "collect", "kite"}:
        move_speed = AUTO_RUNNER_SPEED
    else:
        move_speed = AUTO_FALLBACK_SPEED

    shoot_now = False
    if target is None:
        roam_target = (
            x + move_speed * 3.0 * math.cos(angle),
            y + move_speed * 3.0 * math.sin(angle),
        )
        next_x, next_y, angle, _ = choose_best_step_towards(
            x, y, angle, map_state, roam_target, move_speed,
        )
        return next_x, next_y, angle, shoot_now

    nav_target = path_step_target(map_state, x, y, target[0], target[1])
    next_x, next_y, angle, desired_angle = choose_best_step_towards(
        x, y, angle, map_state, nav_target, move_speed,
    )

    if mode == "chase":
        distance = math.hypot(target[0] - x, target[1] - y)
        aligned = abs(wrap_angle(desired_angle - angle)) <= AUTO_TAGGER_SHOOT_ARC
        shoot_now = aligned and distance <= AUTO_TAGGER_SHOOT_RANGE and (tick % shoot_period_ticks == 0)

    return next_x, next_y, angle, shoot_now

class HardwareContext:
    # Wraps the real BRAM-backed hardware interface from the pynq_raycaster repo.

    def __init__(self, overlay_path: str):
        pynq = _try_import_pynq()
        self.pynq = pynq
        self.overlay = None
        self.bram_mmio = None
        self.gpio_mmio = None
        self.init_error = None

        if pynq is None:
            self.init_error = "pynq runtime is unavailable; this client requires real PYNQ hardware"
            return

        try:
            print(f"[HW] loading overlay: {overlay_path}")
            self.overlay = pynq.Overlay(overlay_path)
            self.bram_mmio = pynq.MMIO(HW_BRAM_BASE_ADDR, HW_BRAM_RANGE)
            self.gpio_mmio = pynq.MMIO(HW_GPIO_BASE_ADDR, HW_GPIO_RANGE)
            print(
                f"[HW] BRAM MMIO ready at 0x{HW_BRAM_BASE_ADDR:08x} "
                f"(range=0x{HW_BRAM_RANGE:x})"
            )
            print(
                f"[HW] button GPIO MMIO ready at 0x{HW_GPIO_BASE_ADDR:08x} "
                f"(range=0x{HW_GPIO_RANGE:x})"
            )
        except Exception as e:
            self.init_error = f"overlay/gpio init failed: {e}"
            print(f"[HW] {self.init_error}")
            self.overlay = None
            self.bram_mmio = None
            self.gpio_mmio = None

    @property
    def hardware_ready(self) -> bool:
        return self.bram_mmio is not None and self.gpio_mmio is not None

    # Read the raw 4-bit button state from the AXI GPIO block added in Button-control.
    def read_button_bits(self) -> int:
        if self.gpio_mmio is None:
            return 0
        return self.gpio_mmio.read(HW_GPIO_DATA_OFFSET) & 0xF

    # Push the authoritative local pose into the fixed BRAM control words the FPGA reads.
    def write_player_pose(self, x: float, y: float, angle: float,
                          map_w: int, map_h: int, tile_scale: int):
        if self.bram_mmio is None:
            return
        x_q = world_to_hw_q6_10(x, tile_scale, map_w)
        y_q = world_to_hw_q6_10(y, tile_scale, map_h)
        angle_raw = radians_to_hw_angle(angle)
        self.bram_mmio.write(HW_PLAYER_POS_OFFSET, ((x_q & 0xFFFF) << 16) | (y_q & 0xFFFF))
        self.bram_mmio.write(HW_PLAYER_ANGLE_OFFSET, angle_raw)

    def write_map_to_bram(self, width: int, height: int, tiles: bytes):
        if self.bram_mmio is None:
            print("[HW] BRAM not available — map tiles not written")
            return
        try:
            rows = encode_map_rows_for_bram(width, height, tiles)
        except ValueError as exc:
            print(f"[HW] map conversion failed: {exc}")
            return
        for row_index, word in enumerate(rows):
            self.bram_mmio.write(row_index * 4, word & 0xFFFFFFFF)
        print(f"[HW] wrote {len(rows)} packed map rows to BRAM ({width}x{height})")

    # TODO(hardware): the FPGA bitstream still needs a sprite/entity pass that reads this BRAM table.
    def write_remote_entities(self, remote_entities, map_w: int, map_h: int, tile_scale: int):
        if self.bram_mmio is None:
            return
        self.bram_mmio.write(HW_ENTITY_COUNT_OFFSET, len(remote_entities) & 0xFF)
        for index in range(MAX_REMOTE_ENTITIES):
            base = HW_ENTITY_TABLE_OFFSET + (index * HW_ENTITY_STRIDE)
            if index < len(remote_entities):
                entity = remote_entities[index]
                x_q = world_to_hw_q6_10(entity["x"], tile_scale, map_w)
                y_q = world_to_hw_q6_10(entity["y"], tile_scale, map_h)
                angle_raw = radians_to_hw_angle(entity["angle"])
                flags_word = (
                    (1 << 16)
                    | ((entity["entity_id"] & 0xFF) << 8)
                    | (entity["flags"] & 0xFF)
                )
                self.bram_mmio.write(base + 0x00, ((x_q & 0xFFFF) << 16) | (y_q & 0xFFFF))
                self.bram_mmio.write(base + 0x04, angle_raw & HW_ANGLE_MASK)
                self.bram_mmio.write(base + 0x08, flags_word)
            else:
                self.bram_mmio.write(base + 0x00, 0)
                self.bram_mmio.write(base + 0x04, 0)
                self.bram_mmio.write(base + 0x08, 0)

# ── Node state machine ────────────────────────────────────────────────────────

class PYNQNode:
    def __init__(self, server_ip: str, server_port: int, hw: HardwareContext,
                 username: str = "", mode: str = "manual"):
        self.server_addr = (server_ip, server_port)
        self.hw          = hw
        self.username    = username.strip()
        self.mode        = "auto" if str(mode).lower() == "auto" else "manual"

        # Game state
        self.player_id   = None
        self.x           = 0.0
        self.y           = 0.0
        self.angle       = 0.0
        self.server_flags = 0
        self.input_flags  = 0
        self.seq         = 0
        self.registered  = False
        self.match_ended = False
        self.movement_mode = MOVEMENT_MODE_POSE
        self.game_mode   = 0
        self.bits_mask   = 0xFFFF
        self.bits        = []
        self.players     = []
        self.tick_count  = 0

        # Map state
        self.map_w      = 0
        self.map_h      = 0
        self.tile_scale = 8
        self.tiles      = bytearray()

        # Remote entities visible in PKT_GAME_STATE (opponent + ghosts).
        self.remote_entities = []

        # asyncio transport
        self.transport  = None
        self.last_server_packet_at = None

    # ── UDP transport callback ─────────────────────────────────────────────

    def connection_made(self, transport):
        self.transport = transport

    # Decode all server-driven packets and mirror the authoritative state locally.
    def datagram_received(self, data: bytes, addr):
        if len(data) < HEADER_SIZE:
            return
        self.last_server_packet_at = time.monotonic()
        pkt_type, seq, timestamp = unpack_header(data)

        if pkt_type == PKT_ACK:
            player_id = struct.unpack_from('<B', data, HEADER_SIZE)[0]
            self.player_id   = player_id
            self.registered  = True
            self.match_ended = False
            self.server_flags = 0
            self.players = []
            role = "LOBBY" if player_id == 0 else ("RUNNER" if player_id == 1 else "TAGGER")
            print(f"[Node] registered as player {player_id} ({role})")

        elif pkt_type == PKT_MAP:
            self.map_w, self.map_h, self.tile_scale, self.tiles = unpack_map_packet(data)
            print(f"[Node] received map {self.map_w}x{self.map_h} tile_scale={self.tile_scale}")
            self.hw.write_map_to_bram(self.map_w, self.map_h, self.tiles)

        elif pkt_type == PKT_BITS_INIT:
            raw_bits = unpack_bits_init_packet(data)
            if raw_bits:
                max_id = max(bit_id for bit_id, _, _ in raw_bits)
                self.bits = [None] * (max_id + 1)
                for bit_id, bit_x, bit_y in raw_bits:
                    self.bits[bit_id] = (bit_x, bit_y)
            else:
                self.bits = []
            print(f"[Node] received {len(raw_bits)} bit positions")
            return

        elif pkt_type == PKT_GAME_STATE:
            _, _, _, self.game_mode, players, self.bits_mask = unpack_server_packet(data)
            self.players = players
            self.remote_entities = build_remote_entities(self.player_id, players)
            for p in players:
                if p["player_id"] == self.player_id:
                    self.x = p["x"]
                    self.y = p["y"]
                    self.angle = p["angle"]
                    self.server_flags = p["flags"]
                    self.match_ended = bool(self.server_flags & FLAG_MATCH_END)
                    if self.server_flags & FLAG_TAGGED:
                        print(f"[Node] P{self.player_id} tagged!")
                    if self.server_flags & FLAG_MATCH_END:
                        print(f"[Node] match ended")

    def error_received(self, exc):
        print(f"[Node] UDP error: {exc}")

    # Return to the registration state so the board can recover from server resets/map swaps.
    def _drop_to_registration(self, reason: str):
        if self.registered or self.player_id is not None:
            print(f"[Node] {reason} — re-registering")
        self.registered = False
        self.player_id = None
        self.match_ended = False
        self.server_flags = 0
        self.remote_entities = []
        self.players = []
        self.last_server_packet_at = None

    # Apply button-driven local movement while keeping the player inside walkable map space.
    def _is_walkable(self, x: float, y: float, radius: float = PLAYER_COLLISION_RADIUS) -> bool:
        if not self.tiles or self.map_w <= 0 or self.map_h <= 0 or self.tile_scale <= 0:
            return True

        offsets = [(0.0, 0.0)]
        if radius > 0.0:
            offsets.extend([
                (radius, 0.0), (-radius, 0.0),
                (0.0, radius), (0.0, -radius),
                (radius, radius), (radius, -radius),
                (-radius, radius), (-radius, -radius),
            ])

        for dx, dy in offsets:
            col = int(math.floor(((x + dx) / self.tile_scale) + (self.map_w / 2.0)))
            row = int(math.floor(((y + dy) / self.tile_scale) + (self.map_h / 2.0)))
            if col < 0 or row < 0 or col >= self.map_w or row >= self.map_h:
                return False
            if self.tiles[row * self.map_w + col]:
                return False
        return True

    # Try full movement first, then axis slides, then a safe partial step.
    def _resolve_move(self, desired_x: float, desired_y: float):
        if self._is_walkable(desired_x, desired_y):
            return desired_x, desired_y
        if self._is_walkable(desired_x, self.y):
            return desired_x, self.y
        if self._is_walkable(self.x, desired_y):
            return self.x, desired_y
        if not self._is_walkable(self.x, self.y):
            return self.x, self.y

        low_x, low_y = self.x, self.y
        high_x, high_y = desired_x, desired_y
        for _ in range(10):
            mid_x = (low_x + high_x) / 2.0
            mid_y = (low_y + high_y) / 2.0
            if self._is_walkable(mid_x, mid_y):
                low_x, low_y = mid_x, mid_y
            else:
                high_x, high_y = mid_x, mid_y
        return low_x, low_y

    # Poll the board buttons and turn them into a local pose update for this tick.
    def _apply_manual_input(self):
        if not self.registered or self.match_ended:
            return

        buttons = decode_button_bits(self.hw.read_button_bits())

        if buttons["turn_left"]:
            self.angle -= MANUAL_TURN_SPEED
        if buttons["turn_right"]:
            self.angle += MANUAL_TURN_SPEED
        self.angle %= 2.0 * math.pi

        move_step = 0.0
        if buttons["forward"]:
            move_step += MANUAL_MOVE_SPEED
        if buttons["backward"]:
            move_step -= MANUAL_MOVE_SPEED
        if move_step == 0.0:
            return

        desired_x = self.x + move_step * math.cos(self.angle)
        desired_y = self.y + move_step * math.sin(self.angle)
        self.x, self.y = self._resolve_move(desired_x, desired_y)

    def _map_state(self):
        return {
            "width": self.map_w,
            "height": self.map_h,
            "tile_scale": self.tile_scale,
            "tiles": self.tiles,
        }

    def _apply_auto_input(self):
        self.input_flags = 0
        if not self.registered or self.match_ended or self.player_id in (None, 0):
            return

        self.x, self.y, self.angle, shoot_now = advance_auto_player(
            self.x,
            self.y,
            self.angle,
            self._map_state(),
            self.player_id,
            self.game_mode,
            self.players,
            self.bits,
            self.bits_mask,
            self.tick_count,
        )
        if shoot_now:
            self.input_flags = FLAG_SHOOTING

    # ── Send helpers ───────────────────────────────────────────────────────

    def _send_register(self):
        pkt = pack_register_packet(
            self.seq, self.x, self.y, self.angle,
            movement_mode=self.movement_mode,
            username=self.username,
        )
        self.seq += 1
        self.transport.sendto(pkt, self.server_addr)

    def _send_state(self):
        if not self.registered:
            return
        pkt = pack_node_packet(PKT_HEARTBEAT if self.match_ended else 0x0001,
                               self.seq, self.x, self.y, self.angle, self.input_flags,
                               movement_mode=self.movement_mode)
        self.seq += 1
        self.transport.sendto(pkt, self.server_addr)

    # ── Main loop ─────────────────────────────────────────────────────────

    # Keep the server connection alive and mirror the latest pose/entity state into BRAM.
    async def run(self):
        loop     = asyncio.get_running_loop()
        sock     = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        self.transport, _ = await loop.create_datagram_endpoint(
            lambda: self,
            sock=sock,
        )

        print(f"[Node] connecting to {self.server_addr}")
        self._send_register()

        interval = 1.0 / TICK_RATE
        reg_retry_at = loop.time() + REGISTER_RETRY_S

        try:
            while True:
                tick_start = loop.time()
                now_monotonic = time.monotonic()

                if (
                    self.registered
                    and self.last_server_packet_at is not None
                    and (now_monotonic - self.last_server_packet_at) > SERVER_SILENCE_TIMEOUT_S
                ):
                    self._drop_to_registration(
                        f"server silent for {SERVER_SILENCE_TIMEOUT_S:.1f}s (map swap/restart?)"
                    )
                    reg_retry_at = loop.time()

                if not self.registered:
                    if loop.time() >= reg_retry_at:
                        self._send_register()
                        reg_retry_at = loop.time() + REGISTER_RETRY_S
                else:
                    self.input_flags = 0
                    if self.mode == "auto":
                        self._apply_auto_input()
                    else:
                        self._apply_manual_input()
                    self._send_state()

                    # Translate centred world coords into the BRAM pose format the FPGA expects.
                    self.hw.write_player_pose(
                        self.x, self.y, self.angle,
                        self.map_w, self.map_h, self.tile_scale,
                    )
                    self.hw.write_remote_entities(
                        self.remote_entities,
                        self.map_w, self.map_h, self.tile_scale,
                    )
                    self.tick_count += 1

                elapsed   = loop.time() - tick_start
                sleep_for = max(0.0, interval - elapsed)
                await asyncio.sleep(sleep_for)

        finally:
            if self.transport:
                self.transport.close()


# ── Entry point ───────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(description="PYNQ-Z1 raycaster client")
    parser.add_argument("--server",  default="3.9.71.204", help="EC2 server IP")
    parser.add_argument("--port",    type=int, default=9000)
    parser.add_argument("--overlay", default="raycaster.bit",
                        help="Path to FPGA bitstream (.bit)")
    parser.add_argument("--mode", choices=["manual", "auto"],
                        default=os.environ.get("PYNQ_MODE", "manual"),
                        help="Local control mode on the board")
    parser.add_argument("--username", default=os.environ.get("PYNQ_USERNAME", ""),
                        help="Optional display name stored with match/player history")
    args = parser.parse_args()

    hw = HardwareContext(args.overlay)
    if not hw.hardware_ready:
        raise SystemExit(hw.init_error or "hardware init failed")
    node = PYNQNode(args.server, args.port, hw, username=args.username, mode=args.mode)
    asyncio.run(node.run())


if __name__ == "__main__":
    main()
