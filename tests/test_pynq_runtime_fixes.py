import asyncio
import errno
import importlib
import math
import struct
import sys
from contextlib import contextmanager
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
PYNQ_EC2 = ROOT / "pynq_full" / "ec2"
PYNQ_SERVER = PYNQ_EC2 / "server"
PYNQ_INTERFACING = ROOT / "pynq_full" / "interfacing"
JUPYTER_SIDE = ROOT / "jupyter_side"


@contextmanager
def pynq_import_context():
    original_path = list(sys.path)
    sys.path[:0] = [str(JUPYTER_SIDE), str(PYNQ_INTERFACING), str(PYNQ_SERVER), str(PYNQ_EC2)]
    for name in list(sys.modules):
        if name in {
            "protocol",
            "test_package_v2",
            "test_package_v3",
            "test_package_v4",
            "t2_packet_handler",
            "t2_game_tick",
            "match_state",
            "game_logic.match_state",
            "player_profiles",
            "t2_constants",
            "t2_map_loader",
            "replay_store",
        }:
            sys.modules.pop(name, None)
    try:
        yield
    finally:
        sys.path[:] = original_path
        for name in list(sys.modules):
            if name in {
                "protocol",
                "test_package_v2",
                "test_package_v3",
                "test_package_v4",
                "t2_packet_handler",
                "t2_game_tick",
                "match_state",
                "game_logic.match_state",
                "player_profiles",
                "t2_constants",
                "t2_map_loader",
                "replay_store",
            }:
                sys.modules.pop(name, None)


class FakeButtons:
    def __init__(self, value):
        self._value = value

    def read(self):
        return self._value


class FakeWriteQueue:
    def __init__(self):
        self.items = []

    def put(self, item):
        self.items.append(item)


class DummyBram:
    def __init__(self):
        self.writes = {}

    def write(self, offset, value):
        self.writes[offset] = value


class BlockingSock:
    def sendto(self, _packet, _addr):
        raise BlockingIOError(errno.EAGAIN, "Resource temporarily unavailable")


def test_test_package_v4_encodes_map_rows_for_current_hardware_layout():
    with pynq_import_context():
        test_package = importlib.import_module("test_package_v4")

        tiles = bytearray(32 * 32)
        tiles[0] = 1
        tiles[5] = 1
        tiles[31] = 1
        tiles[(7 * 32) + 3] = 1

        bram = DummyBram()
        test_package._write_map(bram, tiles, 32, 32)

        assert bram.writes[0] == ((1 << 0) | (1 << 5) | (1 << 31))
        assert bram.writes[7 * 4] == (1 << 3)
        assert bram.writes[8 * 4] == 0


def test_test_package_v4_manual_turns_match_dashboard_left_right():
    with pynq_import_context():
        test_package = importlib.import_module("test_package_v4")

        base_state = {
            "input_flags": 0,
            "angle_raw": 0,
            "angle": 0.0,
            "x": 0.0,
            "y": 0.0,
            "move_speed": 0.2,
            "turn_step": 64,
            "map_w": 32,
            "map_h": 32,
            "tile_scale": 8,
            "tiles": bytearray(32 * 32),
            "input_suspended_until": 0.0,
        }

        left_state = dict(base_state)
        test_package._apply_manual_input(left_state, FakeButtons(test_package.BTN_LEFT))
        assert left_state["angle_raw"] == (test_package.ANGLE_STEPS - 64)

        right_state = dict(base_state)
        test_package._apply_manual_input(right_state, FakeButtons(test_package.BTN_RIGHT))
        assert right_state["angle_raw"] == 64


def test_test_package_v4_replay_mode_snaps_to_server_pose_every_frame():
    with pynq_import_context():
        protocol = importlib.import_module("protocol")
        test_package = importlib.import_module("test_package_v4")

        state = {
            "player_id": 1,
            "mode": "replay",
            "x": 10.0,
            "y": 20.0,
            "angle": 0.5,
            "angle_raw": test_package._hw_angle(0.5),
            "match_ended": False,
            "force_server_pose_sync": False,
            "server_pose_snap_distance": 99.0,
            "server_pose_snap_angle": 99.0,
        }

        test_package._update_local_pose_from_server(state, [{
            "player_id": 1,
            "x": 10.2,
            "y": 20.1,
            "angle": 0.62,
            "flags": protocol.FLAG_MATCH_END,
        }])

        assert state["x"] == 10.2
        assert state["y"] == 20.1
        assert state["angle"] == 0.62
        assert state["angle_raw"] == test_package._hw_angle(0.62)
        assert state["match_ended"] is True


def test_test_package_v4_replay_mode_sends_heartbeat_with_intent_only():
    with pynq_import_context():
        protocol = importlib.import_module("protocol")
        test_package = importlib.import_module("test_package_v4")

        class CaptureSock:
            def __init__(self):
                self.sent = []

            def sendto(self, packet, addr):
                self.sent.append((packet, addr))

        sock = CaptureSock()
        state = {
            "mode": "replay",
            "match_ended": False,
            "seq": 5,
            "x": 4.0,
            "y": 8.0,
            "angle": 0.25,
            "input_flags": 0,
            "last_state_tx": 0.0,
        }

        test_package._send_state(sock, ("127.0.0.1", 9000), state)

        assert len(sock.sent) == 1
        packet, addr = sock.sent[0]
        unpacked = protocol.unpack_node_packet(packet)
        assert addr == ("127.0.0.1", 9000)
        assert unpacked["pkt_type"] == protocol.PKT_HEARTBEAT
        assert unpacked["movement_mode"] == protocol.MOVEMENT_MODE_INTENT_ONLY
        assert state["seq"] == 6


def test_test_package_v4_write_map_clears_stale_rows_before_short_update():
    with pynq_import_context():
        test_package = importlib.import_module("test_package_v4")

        bram = DummyBram()
        old_tiles = bytearray(32 * 32)
        old_tiles[31 * 32] = 1
        test_package._write_map(bram, old_tiles, 32, 32)

        short_tiles = bytearray(8 * 8)
        short_tiles[0] = 1
        test_package._write_map(bram, short_tiles, 8, 8)

        assert bram.writes[0] == 1
        assert bram.writes[31 * 4] == 0


def test_test_package_v4_ignores_stale_map_packets():
    with pynq_import_context():
        protocol = importlib.import_module("protocol")
        test_package = importlib.import_module("test_package_v4")

        def pack_map(timestamp, tiles):
            header = struct.pack(protocol.HEADER_FMT, protocol.PKT_MAP, 0, timestamp)
            map_header = struct.pack(protocol.MAP_HEADER_FMT, 32, 32, 8)
            return header + map_header + bytes(tiles)

        bram = DummyBram()
        state = {
            "registered": True,
            "player_id": 1,
            "mode": "manual",
            "x": 0.0,
            "y": 0.0,
            "angle": 0.0,
            "angle_raw": 0,
            "match_ended": False,
            "map_w": 32,
            "map_h": 32,
            "tile_scale": 8,
            "tiles": bytearray(32 * 32),
            "game_mode": protocol.GAME_MODE_CHASE,
            "bits_mask": 0,
            "bits": [],
            "players": [],
            "input_flags": 0,
            "last_log": 0.0,
            "sprites_dirty": False,
            "force_server_pose_sync": False,
            "input_suspended_until": 0.0,
            "last_map_ts": None,
        }

        fresh_tiles = bytearray(32 * 32)
        fresh_tiles[0] = 1
        stale_tiles = bytearray(32 * 32)
        stale_tiles[(10 * 32) + 10] = 1

        test_package._handle(pack_map(2000, fresh_tiles), state, bram)
        test_package._handle(pack_map(1000, stale_tiles), state, bram)

        assert state["tiles"] == fresh_tiles
        assert bram.writes[0] == 1
        assert bram.writes[10 * 4] == 0


def test_test_package_v4_auto_runner_prefers_nearest_active_bit_in_bits_mode():
    with pynq_import_context():
        protocol = importlib.import_module("protocol")
        test_package = importlib.import_module("test_package_v4")

        state = {
            "registered": True,
            "player_id": 1,
            "x": 0.0,
            "y": 0.0,
            "angle": 0.0,
            "angle_raw": 0,
            "input_flags": 0,
            "match_ended": False,
            "map_w": 32,
            "map_h": 32,
            "tile_scale": 8,
            "tiles": bytearray(32 * 32),
            "game_mode": protocol.GAME_MODE_CHASE_BITS,
            "bits_mask": 0b11,
            "bits": [(-8.0, 0.0), (24.0, 0.0)],
            "players": [{"player_id": 1, "x": 0.0, "y": 0.0, "flags": 0}],
            "tick": 1,
        }

        test_package._apply_auto_input(state)

        assert state["x"] < 0.0
        assert (state["input_flags"] & protocol.FLAG_INPUT_SHOOT) == 0


def test_test_package_v4_auto_tagger_chases_runner_and_shoots_when_aligned():
    with pynq_import_context():
        protocol = importlib.import_module("protocol")
        test_package = importlib.import_module("test_package_v4")

        state = {
            "registered": True,
            "player_id": 2,
            "x": 0.0,
            "y": 0.0,
            "angle": 0.0,
            "angle_raw": 0,
            "input_flags": 0,
            "match_ended": False,
            "map_w": 32,
            "map_h": 32,
            "tile_scale": 8,
            "tiles": bytearray(32 * 32),
            "game_mode": protocol.GAME_MODE_CHASE,
            "bits_mask": 0,
            "bits": [],
            "players": [
                {"player_id": 1, "x": 16.0, "y": 0.0, "flags": 0},
                {"player_id": 2, "x": 0.0, "y": 0.0, "flags": 0},
            ],
            "tick": 0,
        }

        test_package._apply_auto_input(state)

        assert state["x"] > 0.0
        assert state["input_flags"] & protocol.FLAG_INPUT_SHOOT




def test_pynq_redis_io_sanitises_none_values_before_hset():
    with pynq_import_context():
        redis_io_mod = importlib.import_module("t2_redis_io")
        match_state_mod = importlib.import_module("game_logic.match_state")

        state = match_state_mod.MatchState()
        state.players = {
            ("ghost", 1): {
                "player_id": 3,
                "x": 1.0,
                "y": 2.0,
                "angle": 0.5,
                "flags": 0,
                "board_slot": None,
                "control_mode": None,
                "username": None,
                "display_name": None,
                "profile_key": None,
                "controller_key": None,
                "identity_source": None,
            }
        }
        state.selected_map_name = None
        queue = FakeWriteQueue()
        redis_io = redis_io_mod.RedisIO(
            state=state,
            map_state={"name": None, "bits": []},
            broadcast_queue=None,
            write_queue=queue,
        )

        redis_io.push_redis_writes(tick_count=1, match_tick=0)

        hsets = [item for item in queue.items if item.get("op") == "hset"]
        assert hsets
        for item in hsets:
            assert all(value is not None for value in item["mapping"].values())


def test_pynq_packet_handler_allows_single_player_match_start():
    with pynq_import_context():
        packet_handler = importlib.import_module("t2_packet_handler")
        match_state = importlib.import_module("game_logic.match_state")
        protocol = importlib.import_module("protocol")

        state = match_state.MatchState()
        state.players = {
            ("127.0.0.1", 9001): {
                "player_id": 0,
                "x": 0.0,
                "y": 0.0,
                "angle": 0.0,
                "flags": 0,
                "last_seen": 0.0,
                "last_seq": None,
                "movement_mode": 0,
                "protocol_version": 1,
                "timed_out": False,
                "preferred_role": protocol.ROLE_ANY,
                "board_slot": 1,
                "control_mode": "manual",
                "username": "solo",
                "display_name": "solo",
                "profile_key": "solo",
                "controller_key": "controller-solo",
                "identity_source": "username",
            },
        }
        state.pending_roles = {("127.0.0.1", 9001): protocol.ROLE_ANY}
        state.slot_modes = {1: "manual", 2: "manual"}

        handler = packet_handler.PacketHandler(
            state=state,
            packet_queue=asyncio.Queue(),
            write_queue=FakeWriteQueue(),
            udp_transport=None,
            map_state={
                "width": 32,
                "height": 32,
                "tile_scale": 8,
                "tiles": bytearray(),
                "name": "single_player_test",
                "bits": [],
                "spawn_positions": [(-32.0, 0.0)],
            },
            on_match_start=lambda: None,
            on_match_abort=lambda *_args, **_kwargs: None,
            on_match_pause=lambda *_args, **_kwargs: None,
            on_match_resume=lambda *_args, **_kwargs: None,
            on_event=lambda *_args, **_kwargs: None,
        )

        ok, message = handler.start_match_from_lobby()

        assert ok is True
        assert message == "single-player match started"
        assert state.match_started is True
        assert state.players[("127.0.0.1", 9001)]["player_id"] == 1


def test_pynq_packet_handler_rejects_stale_sequences():
    with pynq_import_context():
        packet_handler = importlib.import_module("t2_packet_handler")
        match_state = importlib.import_module("game_logic.match_state")
        protocol = importlib.import_module("protocol")

        state = match_state.MatchState()
        addr = ("127.0.0.1", 9001)
        state.players = {
            addr: {
                "player_id": 1,
                "x": 1.0,
                "y": 2.0,
                "angle": 0.0,
                "flags": 0,
                "last_seen": 0.0,
                "last_seq": 10,
                "movement_mode": 0,
                "protocol_version": 1,
                "timed_out": False,
                "preferred_role": protocol.ROLE_ANY,
                "board_slot": 1,
                "control_mode": "manual",
                "username": "p1",
                "display_name": "p1",
                "profile_key": "p1",
                "controller_key": "controller-p1",
                "identity_source": "username",
            },
        }

        handler = packet_handler.PacketHandler(
            state=state,
            packet_queue=asyncio.Queue(),
            write_queue=FakeWriteQueue(),
            udp_transport=None,
            map_state={
                "width": 32,
                "height": 32,
                "tile_scale": 8,
                "tiles": bytearray(32 * 32),
                "name": "test_map",
                "bits": [],
                "spawn_positions": [],
            },
            on_match_start=lambda: None,
            on_match_abort=lambda *_args, **_kwargs: None,
            on_match_pause=lambda *_args, **_kwargs: None,
            on_match_resume=lambda *_args, **_kwargs: None,
            on_event=lambda *_args, **_kwargs: None,
        )

        pkt = protocol.pack_node_packet(
            pkt_type=protocol.PKT_STATE_UPDATE,
            seq=9,
            x=9.0,
            y=9.0,
            angle=1.0,
            flags=0,
            movement_mode=protocol.MOVEMENT_MODE_POSE,
        )

        handler._process_packet({"data": pkt, "addr": addr})

        assert state.players[addr]["last_seq"] == 10
        assert state.players[addr]["x"] == 1.0
        assert state.players[addr]["y"] == 2.0
