import importlib
import sys
from contextlib import contextmanager
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
PYNQ_EC2 = ROOT / "pynq_full" / "ec2"
PYNQ_SERVER = PYNQ_EC2 / "server"
PYNQ_INTERFACING = ROOT / "pynq_full" / "interfacing"
SIM_EC2 = ROOT / "sim_full" / "ec2"
SIM_SERVER = SIM_EC2 / "server"
SIM_PROTOCOL = ROOT / "sim_full" / "interfacing_+_sim"


@contextmanager
def pynq_import_context():
    original_path = list(sys.path)
    sys.path[:0] = [str(PYNQ_INTERFACING), str(PYNQ_SERVER), str(PYNQ_EC2)]
    for name in list(sys.modules):
        if name in {"protocol", "t2_constants"} or name.startswith("game_logic"):
            sys.modules.pop(name, None)
    try:
        yield
    finally:
        sys.path[:] = original_path
        for name in list(sys.modules):
            if name in {"protocol", "t2_constants"} or name.startswith("game_logic"):
                sys.modules.pop(name, None)


@contextmanager
def sim_import_context():
    original_path = list(sys.path)
    sys.path[:0] = [str(SIM_PROTOCOL), str(SIM_SERVER), str(SIM_EC2)]
    for name in list(sys.modules):
        if name in {"protocol", "t2_constants"} or name.startswith("game_logic"):
            sys.modules.pop(name, None)
    try:
        yield
    finally:
        sys.path[:] = original_path
        for name in list(sys.modules):
            if name in {"protocol", "t2_constants"} or name.startswith("game_logic"):
                sys.modules.pop(name, None)


def test_pynq_anticheat_accepts_newer_in_bounds_step():
    with pynq_import_context():
        anticheat = importlib.import_module("game_logic.anticheat")

        assert anticheat.Anticheat.validate_position(
            10,
            0.0, 0.0, 0.0,
            3.0, 4.0, 0.1, 11,
            -100.0, -100.0, 100.0, 100.0,
            10.0,
        )


def test_pynq_anticheat_rejects_stale_seq():
    with pynq_import_context():
        anticheat = importlib.import_module("game_logic.anticheat")

        assert not anticheat.Anticheat.validate_position(
            10,
            0.0, 0.0, 0.0,
            1.0, 1.0, 0.1, 10,
            -100.0, -100.0, 100.0, 100.0,
            10.0,
        )


def test_pynq_anticheat_rejects_out_of_bounds():
    with pynq_import_context():
        anticheat = importlib.import_module("game_logic.anticheat")

        assert not anticheat.Anticheat.validate_position(
            10,
            0.0, 0.0, 0.0,
            101.0, 0.0, 0.1, 11,
            -100.0, -100.0, 100.0, 100.0,
            10.0,
        )


def test_pynq_anticheat_rejects_speed_cap():
    with pynq_import_context():
        anticheat = importlib.import_module("game_logic.anticheat")

        assert not anticheat.Anticheat.validate_position(
            20,
            0.0, 0.0, 0.0,
            50.0, 0.0, 0.0, 21,
            -100.0, -100.0, 100.0, 100.0,
            10.0,
        )


def test_pynq_anticheat_distance_between_is_euclidean():
    with pynq_import_context():
        anticheat = importlib.import_module("game_logic.anticheat")

        assert anticheat.Anticheat.distance_between(0.0, 0.0, 3.0, 4.0) == 5.0


def test_protocol_flag_names_make_direction_explicit():
    with sim_import_context():
        sim_protocol = importlib.import_module("protocol")

        assert sim_protocol.client_input_flags(shooting=True) == sim_protocol.FLAG_INPUT_SHOOT
        assert sim_protocol.decode_flag_names(
            sim_protocol.FLAG_INPUT_SHOOT, direction="client_to_server"
        ) == ["shoot"]
        assert sim_protocol.decode_flag_names(
            sim_protocol.FLAG_TAGGED | sim_protocol.FLAG_MATCH_END,
            direction="server_to_client",
        ) == ["tagged", "match_end"]


def test_protocol_node_packet_carries_mode_and_version():
    with sim_import_context():
        sim_protocol = importlib.import_module("protocol")

        packet = sim_protocol.pack_node_packet(
            sim_protocol.PKT_STATE_UPDATE,
            7,
            1.5, 2.5, 0.75,
            sim_protocol.client_input_flags(shooting=True),
            movement_mode=sim_protocol.MOVEMENT_MODE_INTENT_WITH_PREDICTION,
        )
        unpacked = sim_protocol.unpack_node_packet(packet)

        assert unpacked["seq"] == 7
        assert unpacked["input_flags"] == sim_protocol.FLAG_INPUT_SHOOT
        assert unpacked["movement_mode"] == sim_protocol.MOVEMENT_MODE_INTENT_WITH_PREDICTION
        assert unpacked["protocol_version"] == sim_protocol.NODE_PROTOCOL_VERSION
