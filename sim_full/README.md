# sim_full/

Fake PYNQ node simulator for testing the game server without real hardware.
Connects over UDP to the EC2 server just like a physical board would.

## Folders

| Folder | Contents |
|--------|----------|
| `interfacing_+_sim/` | `node_simulator.py` + shared `protocol.py` |
| `ec2/` | Copy of the server stack used by `sim_dev2.sh` (older, may diverge from `pynq_full/ec2/`) |

## Running the simulator

The normal way is via `sim_dev2.sh` from the repo root, which sets up a tmux session with the server, monitor, and two simulator nodes.

To run a node manually:

```bash
# From repo root
python3 sim_full/interfacing_+_sim/node_simulator.py <server_ip> 9000 \
    --nodes 1 \
    --node-index 0 \
    --username sim-1 \
    --mode manual \
    --redis-port 6380
```

### Key arguments

| Argument | Default | Description |
|----------|---------|-------------|
| `<server_ip>` | required | EC2 public IP |
| `[port]` | 9000 | UDP port |
| `--nodes N` | 1 | Total number of simulators in this run |
| `--node-index I` | 0 | Which node this process is (0 = first) |
| `--username` | | Stable identity sent in PKT_REGISTER |
| `--mode` | `manual` | Startup mode: `manual` or `auto` |
| `--role` | any | `runner`, `tagger`, or omit for server assignment |
| `--redis-port` | 6379 | Redis port (use 6380 when tunnelling from local) |

### Running two nodes (manual)

```bash
# Terminal 1: node-index 0 (will likely become runner)
python3 sim_full/interfacing_+_sim/node_simulator.py 3.9.71.204 9000 \
    --nodes 1 --node-index 0 --username sim-1 --mode manual

# Terminal 2: node-index 1 (will likely become tagger)
python3 sim_full/interfacing_+_sim/node_simulator.py 3.9.71.204 9000 \
    --nodes 1 --node-index 1 --username sim-2 --mode manual
```

## Modes

- **manual**: node sits still; use keyboard or monitor controls to move
- **auto**: node drives itself; runner evades, tagger chases

The monitor can switch a connected node between modes at runtime via the board control buttons.

## What it does

1. Sends `PKT_REGISTER` to the server with username and preferred role
2. Receives `PKT_ACK` (player_id), `PKT_MAP` (tile data), `PKT_BITS_INIT`
3. Sends `PKT_STATE_UPDATE` at 60 Hz with predicted pose
4. Receives `PKT_GAME_STATE` broadcasts and prints a status line each second
5. Subscribes to Redis `game:control` to handle restart/disconnect commands from the monitor
