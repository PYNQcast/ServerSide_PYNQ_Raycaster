import random
import socket
import struct
import time

import protocol


# Keep protocol.py beside this file on the board.
#
# Edit these constants directly for quick Jupyter-side testing.
SERVER_IP = "3.9.71.204"
SERVER_PORT = 9000
USERNAME = ""
PREFERRED_ROLE = protocol.ROLE_ANY  # or protocol.ROLE_RUNNER / protocol.ROLE_TAGGER
TICK_RATE = 20
TICK_INTERVAL = 1.0 / TICK_RATE
REGISTER_TIMEOUT_S = 5.0
MOVEMENT_MODE = protocol.MOVEMENT_MODE_INTENT_WITH_PREDICTION
STATE_MODE = "static"  # "static" or "random"
STATE_X = 0.0
STATE_Y = 0.0
STATE_ANGLE = 0.0


def _describe_packet(data: bytes):
    if len(data) < protocol.HEADER_SIZE:
        return f"short packet ({len(data)} bytes)"
    pkt_type, seq, timestamp = protocol.unpack_header(data)
    return f"type=0x{pkt_type:04x} seq={seq} ts={timestamp} len={len(data)}"


def _handle_packet(data: bytes, state: dict):
    if len(data) < protocol.HEADER_SIZE:
        print(f"[SHORT] {len(data)} bytes")
        return

    pkt_type, seq, timestamp = protocol.unpack_header(data)

    if pkt_type == protocol.PKT_ACK:
        if len(data) < protocol.HEADER_SIZE + 1:
            print(f"[ACK] malformed: {_describe_packet(data)}")
            return
        player_id = struct.unpack_from("<B", data, protocol.HEADER_SIZE)[0]
        role = "RUNNER" if player_id == 1 else "TAGGER" if player_id == 2 else "UNKNOWN"
        state["registered"] = True
        state["player_id"] = player_id
        print(f"[ACK] player_id={player_id} role={role} header_seq={seq} ts={timestamp}")
        return

    if pkt_type == protocol.PKT_MAP:
        width, height, tile_scale, tiles = protocol.unpack_map_packet(data)
        walls = sum(1 for tile in tiles if tile)
        print(
            f"[MAP] {width}x{height} tile_scale={tile_scale} "
            f"tiles={len(tiles)} walls={walls}"
        )
        return

    if pkt_type == protocol.PKT_BITS_INIT:
        bits = protocol.unpack_bits_init_packet(data)
        print(f"[BITS_INIT] count={len(bits)} bits={bits}")
        return

    if pkt_type == protocol.PKT_GAME_STATE:
        _, rx_seq, rx_ts, game_mode, players, bits_mask = protocol.unpack_server_packet(data)
        print(
            f"[STATE] tick={rx_seq} ts={rx_ts} mode={game_mode} "
            f"players={len(players)} bits_mask=0x{bits_mask:04x}"
        )
        for player in players:
            print(
                f"  P{player['player_id']}: ({player['x']:.2f}, {player['y']:.2f}) "
                f"angle={player['angle']:.2f} flags=0b{player['flags']:08b}"
            )
        return

    print(f"[OTHER] {_describe_packet(data)} hex={data[:32].hex()}")


def _next_pose():
    if STATE_MODE == "random":
        return (
            random.uniform(-10.0, 10.0),
            random.uniform(-10.0, 10.0),
            random.uniform(0.0, 6.28),
        )
    return STATE_X, STATE_Y, STATE_ANGLE


def main():
    print(f"Setting up UDP socket to EC2 ({SERVER_IP}:{SERVER_PORT})...")
    print(
        f"Protocol check: HEADER_SIZE={protocol.HEADER_SIZE}, "
        f"PLAYER_SIZE={protocol.PLAYER_SIZE}, NODE_SIZE={protocol.NODE_SIZE}"
    )
    print(
        f"Client config: username={USERNAME or '<none>'} "
        f"state_mode={STATE_MODE} pose=({STATE_X:.2f}, {STATE_Y:.2f}, {STATE_ANGLE:.2f})"
    )

    sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    server_address = (SERVER_IP, SERVER_PORT)
    state = {"registered": False, "player_id": None}

    try:
        seq_num = 0
        reg_packet = protocol.pack_register_packet(
            seq=seq_num,
            x=STATE_X,
            y=STATE_Y,
            angle=STATE_ANGLE,
            preferred_role=PREFERRED_ROLE,
            username=USERNAME,
            movement_mode=MOVEMENT_MODE,
        )

        print("Sending PKT_REGISTER...")
        sock.sendto(reg_packet, server_address)
        seq_num = (seq_num + 1) & 0xFFFF

        sock.settimeout(REGISTER_TIMEOUT_S)
        while not state["registered"]:
            try:
                data, addr = sock.recvfrom(2048)
                print(f"[RX] from {addr} {_describe_packet(data)}")
                _handle_packet(data, state)
            except socket.timeout:
                print("No response, retrying registration...")
                sock.sendto(reg_packet, server_address)

        sock.settimeout(TICK_INTERVAL)
        print(f"Starting {TICK_RATE}Hz loop\n")

        while True:
            loop_start = time.time()
            state_x, state_y, state_angle = _next_pose()

            packet = protocol.pack_node_packet(
                pkt_type=protocol.PKT_STATE_UPDATE,
                seq=seq_num,
                x=state_x,
                y=state_y,
                angle=state_angle,
                flags=0,
                movement_mode=MOVEMENT_MODE,
            )
            sock.sendto(packet, server_address)
            seq_num = (seq_num + 1) & 0xFFFF

            while True:
                try:
                    data, addr = sock.recvfrom(4096)
                    print(f"[RX] from {addr} {_describe_packet(data)}")
                    _handle_packet(data, state)
                except socket.timeout:
                    break
                except Exception as exc:
                    print(f"[ERR] {exc}")
                    break

            elapsed = time.time() - loop_start
            sleep_time = TICK_INTERVAL - elapsed
            if sleep_time > 0:
                time.sleep(sleep_time)

    except KeyboardInterrupt:
        print("\nStopped.")
    finally:
        sock.close()


if __name__ == "__main__":
    main()
