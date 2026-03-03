# interfacing_+_sim/

This folder contains the shared wire protocol and the local node simulator.

## Files

- [protocol.py](/home/akendall/Documents/ServerSide_PYNQ_Raycaster/interfacing_+_sim/protocol.py)
  - source of truth for the UDP packet format
- [node_simulator.py](/home/akendall/Documents/ServerSide_PYNQ_Raycaster/interfacing_+_sim/node_simulator.py)
  - local test client
  - supports `auto` and `manual` mode
- [PYNQ_TO_EC2.md](/home/akendall/Documents/ServerSide_PYNQ_Raycaster/interfacing_+_sim/PYNQ_TO_EC2.md)
  - teammate guide for real board bring-up

## Current usage

- run node simulators locally via `dev.sh`
- send real PYNQ traffic directly to the EC2 public IP on UDP `9000`
- use the monitor to switch each simulator between auto and manual mode

## Important rule

If `protocol.py` changes, both:

- the node simulator
- the EC2 server packet handling

must stay in sync.
