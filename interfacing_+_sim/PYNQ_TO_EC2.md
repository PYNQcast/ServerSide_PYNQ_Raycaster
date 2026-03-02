# PYNQ to EC2 Guide

replacing `node_simulator.py`

EC2; 
It expects the binary `NodePacket` format defined in:

- [protocol.py]
- basically skips JSON
- maybe we add JSON formats - but a shared UDP protocol is nice too


Current setup:

- EC2 server listens on UDP port `9000`
- The receiver binds to `0.0.0.0:9000`, so it accepts packets from any source IP
- Replies come back from the same EC2 UDP socket

means:

- The PYNQ board does not need to be on your laptop
- The PYNQ board does not need to be on the same LAN as you

- The board only needs outbound internet access and a route to the EC2 public IP

#### key config

### EC2 address

- `18.175.238.148`

###  UDP port

- UDP `9000`


### Packet rate

Send updates at:

- about `20 Hz` (`1 packet every 0.05s`)

That matches the server game tick.

### 5. First packet must be REGISTER

The server expects:

1. one `PKT_REGISTER`
2. then repeated `PKT_STATE_UPDATE`

If the board only sends state updates and never registers properly, the game loop can ignore it or behave inconsistently.

## Minimal board-side flow

The easiest MVP is a normal Python script on the PYNQ Linux side. It does not need Jupyter.

High-level flow:

1. Import `pack_node_packet` and packet constants from the shared protocol file
2. Create a UDP socket
3. Send a `REGISTER` packet with the starting `x`, `y`, `angle`
4. Loop forever:
   - read current board position
   - pack a `STATE_UPDATE`
   - `sendto()` EC2
   - sleep `0.05s`

## Minimal sender example

This is the simplest possible shape of the sender.

```python
import math
import socket
import time

from protocol import pack_node_packet, PKT_REGISTER, PKT_STATE_UPDATE

SERVER_IP = "18.175.238.148"   # replace if EC2 public IP changes
SERVER_PORT = 9000
SERVER = (SERVER_IP, SERVER_PORT)

sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
sock.settimeout(0.05)

seq = 0
angle = 0.0
x = 50.0
y = 0.0
flags = 0

# First contact
pkt = pack_node_packet(PKT_REGISTER, seq=seq, x=x, y=y, angle=angle, flags=flags)
sock.sendto(pkt, SERVER)
seq = (seq + 1) & 0xFFFF

while True:
    # Replace this with real board state
    angle += 0.05
    x = 50.0 * math.cos(angle)
    y = 50.0 * math.sin(angle)

    pkt = pack_node_packet(PKT_STATE_UPDATE, seq=seq, x=x, y=y, angle=angle, flags=0)
    sock.sendto(pkt, SERVER)
    seq = (seq + 1) & 0xFFFF

    time.sleep(0.05)  # 20 Hz
```


 failures
- closer to how the final board client should behave

## What to test first

### Test 1: one real board

Success means:

- EC2 server logs show a player registering
- the monitor shows one player moving

### Test 2: two real boards

Success means:

- both players register
- match starts automatically
- positions update live
- tags are detected

### Test 3: board receives server packets back

Optional for first bring-up, but useful:

- the board listens for `GAME_STATE`
- confirms that EC2 replies are reaching the board through NAT/firewall



## Recommended MVP milestone order

### V1: Real board to EC2 ingest

One real PYNQ sends valid packets to EC2.

### V2: Two real boards in live match

Two boards register, move, and trigger tags.

### V3: Real board match persists to AWS

Sidecar writes match records to DynamoDB from a real match.


## Bottom line

For MVP, the board only needs to send:

- `x`
- `y`
- `angle`
- `flags`

over UDP, in the shared binary packet format, to the EC2 public IP on port `9000`.

