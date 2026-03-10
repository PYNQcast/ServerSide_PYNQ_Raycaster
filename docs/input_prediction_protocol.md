# Input Prediction Protocol

This repo uses a node -> EC2 movement protocol that is trying to satisfy two constraints at once:

- the board or simulator must feel responsive locally
- EC2 must stay authoritative for match state

That tension is the whole reason prediction exists here.

## Why send predicted pose at all?

If the node waited for EC2 before updating its local pose, controls would feel slow and uneven because every movement step would be gated by network round-trip time and server tick timing.

So the node does this instead:

1. read local input immediately
2. compute the pose it thinks that input should produce
3. send that pose to EC2
4. accept EC2 broadcast state as the real answer

In protocol terms:

- `input_flags` = what the player actually pressed this tick
- `pred_x`, `pred_y`, `pred_angle` = the node's local best guess of the resulting pose
- EC2 broadcast state = authoritative truth

The word `predicted` matters. The node is not declaring authority. It is reporting what it thinks happened locally so the server can validate or compare it.

## Why have three movement modes?

The three movement modes are there because they represent three different ownership models for movement, and the repo is still evolving between them.

### `MOVEMENT_MODE_POSE`

Meaning:

- the node sends a pose update
- the server interprets `x/y/angle` as the movement payload for this tick
- the server may still clamp, collision-resolve, or reject it

This is the simplest mode to get working because the node does most of the movement step already.

### `MOVEMENT_MODE_INTENT_ONLY`

Meaning:

- the node sends only player intent
- the server should ignore `x/y/angle`
- the server should simulate movement entirely on EC2

This is the cleanest authoritative model, but it requires richer input flags and complete server-side movement logic.

### `MOVEMENT_MODE_INTENT_WITH_PREDICTION`

Meaning:

- the node sends player intent
- the node also sends the pose it predicted from that intent
- the server can use the predicted pose as a validation or debugging signal

This is the hybrid model. It is useful when the node needs immediate local responsiveness, but you still want the protocol to carry enough information to compare node-side and server-side movement behaviour.

## Why prediction is useful in this repo specifically

Prediction is not just a generic game-networking idea here. It is useful for this codebase because we have:

- a simulator client
- a PYNQ Python client
- an EC2 server that can validate movement
- future FPGA / PS offload work where node-side and server-side movement may diverge

Sending predicted pose gives you a cheap comparison point:

- what the node thought should happen
- what the server actually accepted

That helps with:

- responsiveness
- validation
- debugging drift
- migration from simulator behaviour to real board behaviour

## What the code does today

The protocol supports all three modes, but the implementation is not fully symmetric yet.

Current reality:

- clients default to `MOVEMENT_MODE_INTENT_WITH_PREDICTION`
- the current PYNQ client still computes its own movement locally
- the current EC2 server treats all non-`INTENT_ONLY` modes as pose-carrying updates
- `INTENT_ONLY` is the intended cleaner end state, but it is not fully wired yet because the protocol does not yet carry all movement intents needed for full server-side simulation

So today:

- `POSE` and `INTENT_WITH_PREDICTION` are semantically different
- but in the current server implementation they are handled very similarly

That is why all three exist even though only two are meaningfully distinct in the live code right now.

## What do `0x00`, `0x01`, and `0x02` mean?

These are hexadecimal integer literals.

They are:

- not register addresses
- not byte counts
- not memory offsets

They are just small numeric tags stored in the one-byte `movement_mode` field of the packet.

Examples:

- `0x00` means decimal `0`
- `0x01` means decimal `1`
- `0x02` means decimal `2`

Hex is used because protocol constants, flags, and packet types are easier to scan in hex when you are looking at bytes on the wire.

In this specific case:

- `MOVEMENT_MODE_POSE = 0x00`
- `MOVEMENT_MODE_INTENT_ONLY = 0x01`
- `MOVEMENT_MODE_INTENT_WITH_PREDICTION = 0x02`

That means the single byte on the wire will literally contain:

- `00`
- `01`
- or `02`

depending on which movement model the node is declaring for that packet.

## What does `NODE_PROTOCOL_VERSION = 1` mean?

This is another one-byte tag in the packet.

It is not the size of the packet and not a register value. It is just the declared version of the node packet format.

The purpose is:

- if the wire format changes later in a breaking way
- the node can send a newer version number
- the server can reject or route that packet appropriately

At the moment `1` means "the current 24-byte NodePacket layout".

## Why this fits PYNQ well

On the PYNQ board, local controls naturally exist on the board side first. That means the board can react immediately, while EC2 still remains authoritative for:

- tag resolution
- match flow
- fairness
- final broadcast state

That is exactly the kind of setup where prediction makes sense.

## Intended end state

The long-term clean model is:

1. node reads local controls
2. node may predict locally for feel
3. node sends intent and possibly predicted pose
4. EC2 decides authoritative movement and match outcomes
5. node reconciles to EC2 broadcast state

The likely architectural direction is to move closer to `INTENT_ONLY` over time, but `INTENT_WITH_PREDICTION` is a practical bridge while the real board path is being brought up and compared against simulator behaviour.
