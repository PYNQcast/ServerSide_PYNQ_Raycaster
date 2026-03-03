# PYNQ to EC2

Use this when replacing the local node simulator with a real PYNQ board.

## Key facts

- the EC2 server listens on UDP `9000`
- it binds to `0.0.0.0`, so boards can connect from any network
- the board does not need to be on your laptop or LAN
- the wire format is binary UDP, not JSON

## What the board sends

The board should send the shared `NodePacket` format from:

- [protocol.py](/home/akendall/Documents/ServerSide_PYNQ_Raycaster/interfacing_+_sim/protocol.py)

Minimum flow:

1. send one `PKT_REGISTER`
2. then send `PKT_STATE_UPDATE` at about `20 Hz`

## Required config

- EC2 public IP
- UDP port `9000`
- outbound UDP allowed from the board network
- inbound UDP `9000` allowed in the EC2 security group

## Local testing note

Node simulators are still part of the local dev workflow:

- run them locally via `dev.sh`
- they are separate from the EC2 services
- the monitor can switch their mode, but it does not launch them

## First success check

Success means:

- the board registers with the EC2 server
- the monitor shows the player
- the server broadcasts state back cleanly
