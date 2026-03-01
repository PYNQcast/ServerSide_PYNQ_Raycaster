# Binary UDP Protocol

All packets are sent over UDP. All fields are **little-endian** (`<` in Python struct).

Little-endian;  This matters when the C++ game logic module (`ec2/game_logic/`) unpacks the same packet fields.

---

## Packet types

| Constant | Value | Direction | Meaning |
|---|---|---|---|
| `PKT_STATE_UPDATE` | `0x0001` | node → server | Position update (sent at 20 Hz) |
| `PKT_GAME_STATE` | `0x0002` | server → node | Full state broadcast (all players) |
| `PKT_HEARTBEAT` | `0x0010` | node → server | Keepalive (no position data) |
| `PKT_REGISTER` | `0x0020` | node → server | First contact, request player_id |
| `PKT_ACK` | `0x0030` | server → node | Confirms registration |

---

## struct format characters

| Char | Type | Bytes | Range | Used for |
|---|---|---|---|---|
| `<` | little-endian prefix | : | : | byte order |
| `H` | unsigned short | 2 | 0–65535 | packet type, seq number |
| `I` | unsigned int | 4 | 0–4294967295 | timestamp (ms, truncated 32-bit) |
| `f` | float32 | 4 | ±3.4×10³⁸ | x, y, angle |
| `B` | unsigned byte | 1 | 0–255 | flags bitmask, player_id |
| `x` | padding byte | 1 | : | alignment filler, always zero |

---

## NodePacket : node → server (24 bytes)

Sent by every PYNQ node / simulator at 20 Hz.

```
Offset  Size  Fmt  Field
  0       2    H   type       PKT_STATE_UPDATE (0x0001)
  2       2    H   seq        wraps at 65535 : used to detect dropped packets
  4       4    I   timestamp  ms since epoch, truncated to 32-bit (~49 day wrap)
  8       4    f   x          world-space X position
 12       4    f   y          world-space Y position
 16       4    f   angle      view direction in radians (0 = east, π/2 = north)
 20       1    B   flags      bitmask : see flags section below
 21       3    3x  padding    reserved, always zero
```

Format string: `'<HHIfffB3x'` : total: **24 bytes**

---

## ServerPacketHeader : server → node header (8 bytes)

Every server → node packet starts with this 8-byte header.

```
Offset  Size  Fmt  Field
  0       2    H   type       PKT_GAME_STATE (0x0002)
  2       2    H   seq        server's own sequence counter
  4       4    I   timestamp  server time in ms
```

Format string: `'<HHI'` : total: **8 bytes**

---

## PlayerEntry : per-player state (14 bytes)

Follows the 8-byte header in a `PKT_GAME_STATE` packet. One entry per connected player. Total packet size = 8 + (14 × N) bytes for N players.

```
Offset  Size  Fmt  Field
  0       1    B   player_id  0–255
  1       4    f   x
  5       4    f   y
  9       4    f   angle
 13       1    B   flags
```

Format string: `'<BfffB'` : total: **14 bytes**

---

## Flags bitmask

The `flags` byte is a bitmask : each bit is an independent boolean. Currently two bits are defined for the tag game demo. The other 6 bits are free for any game to use.

| Bit | Constant | Value | Meaning |
|---|---|---|---|
| 0 | `FLAG_SHOOTING` | `0x01` | Player is firing this tick |
| 1 | `FLAG_TAGGED` | `0x02` | Player has been tagged (game over) |
| 2–7 | : | : | Free : redefine for your game |

Examples for other games: `FLAG_JUMPING = 0x01`, `FLAG_CROUCHING = 0x02`, `FLAG_INTERACTING = 0x04`

Reading a flag: `if flags & FLAG_SHOOTING: ...`
Setting a flag: `flags |= FLAG_SHOOTING`
Clearing a flag: `flags &= ~FLAG_SHOOTING`

---

## Full GAME_STATE packet example (2 players)

```
[  8 bytes header  ] [ 14 bytes player 0 ] [ 14 bytes player 1 ]
= 36 bytes total
```

The client reads the header, then loops through the remaining bytes in 14-byte chunks to extract each player.

---

## Why UDP not TCP?

- **No head-of-line blocking** : a dropped packet doesn't stall later ones
- **No connection overhead** : PYNQ nodes can send without a handshake
- **Low latency** : position data is time-sensitive; a stale packet is better dropped than delayed
- Dropped packets are tolerable : the next position update arrives 50ms later anyway

The `seq` field lets the server detect gaps (dropped packets) if needed.

---

## Extending the protocol

To add a new packet type:
1. Add a `PKT_` constant in `protocol.py`
2. Define its format string and size (with an assert)
3. Add pack/unpack functions
4. Handle the new type in `server.py` and `sender.py`

The same protocol is used in `ec2/` : any changes here must be mirrored there.
