# game_logic/

Pure game rules; no I/O, no Redis, no UDP. Imported by `t2_game_tick.py`.

## Files

| File | Role |
|------|------|
| `match_state.py` | Mutable match fields: players, flags, bits, spawn positions, ghost profiles. Reset helpers. |
| `core_logic.py` | Per-tick rules: tag detection, bit collection, grace ticks, ghost AI movement, match-end check. |
| `anticheat.py` | Position validation: speed cap, out-of-bounds, sequence number checks. |
| `cpp_archive/` | C++ reference implementations (not compiled or used at runtime). |

## Design

All classes take a `MatchState` reference and a `write_queue`; they mutate state in place and enqueue Redis writes but never touch the network directly. This keeps the rules testable in isolation.
