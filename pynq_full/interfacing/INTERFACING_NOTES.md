# PYNQ Interfacing Notes

This note is the quick state-of-play for the real `pynq_full` board path.

It answers three questions:

- what the current PS <-> EC2 <-> FPGA split is
- what is already structured well for FPGA / PS offload
- what still needs changing before this is a clean hardware-first path

## Current Split

Today the PYNQ Python client is doing four jobs:

1. UDP transport to EC2
2. protocol decode / encode
3. local movement prediction
4. hardware writes into the raycaster interface

The current rough flow is:

1. node sends `PKT_REGISTER`
2. server replies with `PKT_ACK`
3. server sends `PKT_MAP`
4. server may send `PKT_BITS_INIT`
5. node sends movement packets each tick
6. server validates / applies state
7. server broadcasts authoritative `PKT_GAME_STATE`
8. node writes local pose to FPGA-visible registers

Relevant files:

- `pynq_full/interfacing/pynq_client.py`
- `pynq_full/interfacing/protocol.py`
- `pynq_full/ec2/server/t2_packet_handler.py`
- `pynq_full/ec2/server/t2_redis_io.py`

## What Is Already Offload-Friendly

These parts are pointed in the right direction already:

- Map transfer is explicit.
  `PKT_MAP` arrives once and tiles are written into BRAM.
- Local pose has a clean hardware boundary.
  Python writes `player_x`, `player_y`, and `player_angle` into the raycaster register interface.
- The wire format already carries gameplay metadata the FPGA path will need.
  That includes:
  - `game_mode`
  - `bits_mask`
  - `FLAG_GHOST`
  - `FLAG_TAGGED`
  - `FLAG_MATCH_END`
- The board path already distinguishes protocol decode from game logic.
  That means the client can become thinner without redesigning the entire stack.

So structurally, `pynq_full` is prepared for offload work.

## What Is Not Optimized Yet

This is the important part: the real board path is still a bridge, not a finished hardware-first implementation.

### 1. Movement is still Python-first

`pynq_client.py` still computes local movement in `_step()`.

That is fine for bring-up, but it means:

- the PS is still carrying simulator-style movement logic
- the board client is not just a thin hardware transport layer
- movement ownership is not yet as clean as it should be for a final FPGA/PS split

### 2. The client still defaults to prediction mode

The client currently uses `MOVEMENT_MODE_INTENT_WITH_PREDICTION`.

That is useful during transition because it lets the node feel responsive and gives EC2 something to validate against. But it is not the cleanest final authority model.

Longer term, the cleaner model is closer to:

- board sends intent
- EC2 owns authoritative movement
- board renders what EC2 says

### 3. Remote entities are not on the hardware path yet

The current board client mainly tracks:

- local player pose
- one peer pose
- bit metadata

It does not yet maintain a proper remote-entity table for:

- the other human player
- ghost taggers
- future sprite-like world objects

That means the network path is ready before the hardware render path is.

See also:

- `pynq_full/interfacing/REMOTE_ENTITIES.md`

### 4. Bits are parsed, but not pushed into FPGA-visible memory

`PKT_BITS_INIT` and `bits_mask` are already on the wire, which is good.

But the board-side target should be:

- Python stores bit positions
- Python writes them into a BRAM/register table
- FPGA renders or otherwise consumes them directly

That full loop is not finished yet.

### 5. Software fallback is still mixed into the live client

`pynq_client.py` still contains a software raycaster fallback.

That is useful for:

- development
- bring-up
- running without real board hardware

But it also means the file still mixes:

- hardware control
- transport
- software rendering

That is convenient, not optimized.

### 6. Hardware writes are simple, not performance-tuned

Current hardware interaction is intentionally straightforward:

- one register write per local pose field
- one BRAM word write per map tile

That is okay for now, but it is not a tuned bulk-update path.

## Practical Interpretation

The honest summary is:

- optimized for future FPGA / PS offload direction: yes
- optimized as a final hardware-first runtime: no

It is best described as:

- hardware-aware
- offload-ready in structure
- still Python-heavy in behavior

## What The Next Board-Side Steps Should Be

If the goal is real FPGA usage rather than another simulator-quality bridge, the next steps should be:

1. Replace `_step()` movement with real board input handling.
2. Keep Python focused on transport, packet decode, and hardware memory writes.
3. Add a BRAM-backed remote-entity table.
4. Add a BRAM-backed or register-backed bits table.
5. Make the FPGA renderer consume:
   - local pose
   - map tiles
   - remote entities
   - bits / bit mask
6. Only then decide whether to move fully toward `INTENT_ONLY`.

## Recommended Final Shape

The target shape should be:

- EC2:
  - authoritative match flow
  - authoritative state broadcast
- PYNQ Python:
  - UDP transport
  - packet decode
  - hardware memory/register writes
  - minimal local control glue
- FPGA:
  - wall rendering
  - remote entity rendering
  - bit rendering
  - optional more of the movement/render pipeline later

That is the point where `pynq_full` stops being "sim logic adapted onto a board" and becomes a proper board-side implementation.
