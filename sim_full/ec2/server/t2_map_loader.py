# t2_map_loader.py — Map file loading for the sim_full server.
#
# Loads from the shared pynq_full/ec2/maps/ directory so sim and PYNQ
# always use the same map files without duplication.
# Map state is a plain mutable dict so the control listener can hot-swap it.

import os
from t2_constants import MAP_TILE_SCALE

# Maps live in pynq_full/ec2/maps/ — two levels up from sim_full/ec2/server/
_HERE     = os.path.dirname(__file__)
_MAPS_DIR = os.path.normpath(os.path.join(_HERE, '..', '..', '..', 'pynq_full', 'ec2', 'maps'))

DEFAULT_MAP_PATH = os.path.join(_MAPS_DIR, 'chase.txt')


def load_map(path: str) -> dict:
    """Parse a text map file.

    Tile key: '#' = wall, 'B' = bit spawn (floor tile, world pos recorded),
              anything else = empty.
    Returns dict: {width, height, tile_scale, tiles, name, bits}
      bits: list of (world_x, world_y) — centres of 'B' cells, origin at map centre.
    """
    rows = []
    try:
        with open(path) as f:
            for line in f:
                line = line.rstrip('\r\n')
                if not line:
                    continue
                rows.append(line)
        width  = len(rows[0]) if rows else 0
        height = len(rows)
        ts     = MAP_TILE_SCALE
        tiles  = bytearray()
        bits   = []

        for row_idx, row in enumerate(rows):
            for col_idx, c in enumerate(row):
                tiles.append(1 if c == '#' else 0)
                if c == 'B':
                    world_x = (col_idx - width  / 2.0 + 0.5) * ts
                    world_y = (row_idx - height / 2.0 + 0.5) * ts
                    bits.append((world_x, world_y))

        name = os.path.splitext(os.path.basename(path))[0]
        print(f"[T2] map loaded: {path}  {width}x{height}  bits={len(bits)}")
        return {"width": width, "height": height,
                "tile_scale": ts, "tiles": tiles, "name": name, "bits": bits}
    except Exception as e:
        print(f"[T2] WARNING: could not load map {path}: {e}")
        return {"width": 0, "height": 0,
                "tile_scale": MAP_TILE_SCALE, "tiles": bytearray(), "name": "none", "bits": []}
