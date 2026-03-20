# interfacing/

Shared UDP wire-format library. Used by both the EC2 server and the PYNQ client.

## Files

| File | Role |
|------|------|
| `protocol.py` | Packet types, flags, roles, struct formats, pack/unpack helpers. |
| `INTERFACING_NOTES.md` | Design notes on the packet layout and coordinate conventions. |
| `REMOTE_ENTITIES.md` | Notes on how remote player entities are rendered on the FPGA. |

## Key packets

| Constant | Direction | Purpose |
|----------|-----------|---------|
| `PKT_STATE_UPDATE` | node -> server | Player position this tick |
| `PKT_REGISTER` | node -> server | First contact; optional username trailer |
| `PKT_GAME_STATE` | server -> node | All player positions + game mode + bits mask |
| `PKT_ACK` | server -> node | Registration confirmed; byte 8 = player_id |
| `PKT_MAP` | server -> node | Tile data for FPGA BRAM |
| `PKT_BITS_INIT` | server -> node | Bit positions at match start |
| `PKT_PERF` | node -> server | Board telemetry (~every 2 s) |

All structs are little-endian. Size asserts run at import time to catch layout mismatches early.
