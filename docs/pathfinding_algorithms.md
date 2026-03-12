# Pathfinding And Movement Algorithms

This repo currently uses a small set of movement and routing algorithms rather than one shared "navigation system".

The important split is:

- `sim_full` auto-test nodes now use real grid pathfinding on the loaded map
- the real PYNQ board launch path in `jupyter_side/test_package.py` now uses the same style of grid pathfinding when started in `--mode auto`
- server-side ghosts do not use full pathfinding; they use reactive steering toward the runner
- both paths rely on the same map walkability and collision-resolution ideas

## 1. Sim Auto Nodes: Grid Pathfinding

File:

- `sim_full/interfacing_+_sim/node_simulator.py`

Used for:

- `Auto Play` / auto-mode simulator nodes in `sim_full`
- runner auto-collecting bits
- tagger auto-chasing the runner
- runner auto-evading when the tagger is nearby

### Core approach

The simulator converts world-space targets into map cells and runs a lightweight A* search over the `32x32` tile grid:

- `world_to_cell(...)`
- `nearest_open_cell(...)`
- `build_cell_path(...)`
- `path_step_target(...)`

That path is not followed all at once. The simulator only takes the next cell-center waypoint, then performs one movement step toward it each tick.

This keeps the node behavior:

- cheap enough to run every tick
- stable on custom maps
- able to route around walls instead of repeatedly pushing into them

### Search details

`build_cell_path(...)` is effectively 4-direction A*:

- neighbours: up / down / left / right
- step cost: `1`
- heuristic: Manhattan distance to goal
- blocked cells: any `#` wall tile

Because maps are tiny (`32x32`), this is fast enough without extra caching or hierarchical navigation.

### Auto decision layer

Before pathfinding, the node chooses an objective:

- tagger: chase the runner
- runner in `CHASE_BITS`: collect nearest active bit
- runner near tagger: evade instead of greedily collecting
- no strong target: roam

That objective selection lives in:

- `choose_auto_objective(...)`
- `advance_auto_player(...)`

### Final motion step

Even after A*, the node still uses local collision resolution for the actual per-tick move:

- `resolve_move(...)`
- `is_walkable(...)`

So the full stack is:

1. choose objective
2. compute next path waypoint on the tile grid
3. attempt one collision-safe world-space step toward that waypoint

## 1b. PYNQ Board Auto Mode: Same Grid Pathing In `test_package.py`

Files:

- `jupyter_side/test_package.py`
- `pynq_full/interfacing/pynq_client.py`

Used for:

- real-board demo mode when the PYNQ client is launched with `--mode auto`
- runner auto-collecting bits on the live FPGA board path
- tagger auto-chasing and shooting without manual button input

### Core approach

The board client now mirrors the simulator navigation stack:

- `_nearest_open_cell(...)`
- `_build_cell_path(...)`
- `_path_step_target(...)`
- `_choose_auto_objective(...)`
- `_apply_auto_input(...)`

So the board path is no longer "move straight at target and get stuck". It uses the same 4-way grid search through the loaded `32x32` map, then takes one collision-safe step toward the next waypoint each tick.

### Important note

For the real PYNQ path, `test_package.py` is the current source of truth. That is the script used on the board during bring-up and demos.

## 2. Server Ghosts: Reactive Steering, Not Full Pathfinding

File:

- `sim_full/ec2/game_logic/core_logic.py`

Used for:

- server-controlled ghost taggers

### Core approach

Ghosts do not currently run A* or any tile-grid path planner.

Instead, each tick they:

1. point toward the runner
2. try a small ordered set of steering offsets around that heading
3. resolve each candidate move against map collision
4. score the result by progress toward the runner, move distance, and steering smoothness
5. keep a small `steer_dir` memory so they do not oscillate as much on corners

Main functions:

- `_move_ghosts(...)`
- `_choose_ghost_step(...)`

### Why ghosts are different

Ghosts live inside authoritative server logic, so the implementation is intentionally simpler:

- no per-ghost path cache
- no explicit route search
- just "move toward runner, but slide/steer around obstacles if blocked"

This is cheaper and good enough for current ghost pressure, but it is less reliable than the simulator A* pathing on complex custom maps.

If ghost behavior ever needs to become more competent on maze-like maps, the next obvious upgrade is to move them onto the same grid-path approach the auto nodes now use.

## 3. Shared Collision / Walkability Layer

Files:

- `sim_full/interfacing_+_sim/node_simulator.py`
- `sim_full/ec2/server/t2_map_loader.py`
- `pynq_full/ec2/server/t2_map_loader.py`

Common idea:

- treat wall tiles as blocked
- test not just the center point, but also offsets around player radius
- allow axis-only fallback and binary-search style shrink-back when a move would clip into a wall

Key functions:

- simulator: `is_walkable(...)`, `resolve_move(...)`
- server: `is_walkable_world(...)`, `resolve_walkable_world(...)`

This is not pathfinding by itself. It is the low-level "can I stand here / can I move here safely?" layer used underneath the higher-level behaviors.

## 4. Spawn Placement Search

Files:

- `sim_full/interfacing_+_sim/node_simulator.py`
- `sim_full/ec2/server/t2_map_loader.py`
- `pynq_full/ec2/server/t2_map_loader.py`

Spawn generation is also a search problem, but not pathfinding.

The repo uses a nearest-valid-cell search around preferred spawn anchors:

- check expanding rings around the desired anchor
- prefer open cells with better surrounding openness
- reject cells that fail collision-radius checks

Key functions:

- `build_spawn_positions(...)`
- `_nearest_walkable_cell(...)`

This is why custom maps can have sensible spawn placement even if the exact requested anchor is blocked.

## 5. Current Summary

Today the navigation story is:

- sim auto nodes: 4-way A* on the tile grid + local collision-safe motion
- ghosts: greedy/reactive steering with obstacle avoidance, no full pathfinding
- map/server collision: radius-aware walkability checks and fallback motion resolution
- spawn selection: expanding nearest-valid-cell search

So if someone asks "do we use pathfinding?", the accurate answer is:

- yes for sim auto nodes
- not yet for ghosts
- collision resolution everywhere
