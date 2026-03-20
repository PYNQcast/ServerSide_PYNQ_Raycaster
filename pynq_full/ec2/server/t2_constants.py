# t2_constants.py - Tunable game and server constants for T2 GameTick.
import math

# Tag / match rules
TAG_RADIUS       = 16.0   # tag proximity radius in world units
MATCH_PLAYERS    = 2
MAX_PLAYERS      = 4      # 2 humans + up to 3 ghost tagger slots
TAGS_TO_WIN      = 2

# Ghost tagger (server-controlled AI)
# Spawned when both humans declare RUNNER; capped at MAX_GHOSTS for fairness.
MAX_GHOSTS       = 3
GHOST_SPEED      = 0.15   # world units per tick (~9 wu/s at 60 Hz)

# Bits mode (GAME_MODE_CHASE_BITS)
# Bit positions come from 'B' tiles in the map file.
BIT_COLLECT_RADIUS      = 8.0
PLAYER_COLLISION_RADIUS = 2.0
SPAWN_CLEARANCE_RADIUS  = 3.25

# Timing (seconds)
TAG_FLASH_S            = 0.3
MATCH_END_HOLD_S       = 0.5
LOCKOUT_S              = 0.5   # block re-registration immediately after match end
KICK_RECONNECT_BLOCK_S = 30.0  # cooldown after a monitor kick
NODE_TIMEOUT_S         = 60.0  # pause match after this long with no packets from a human
LOBBY_TIMEOUT_S        = 10.0  # evict lobby players faster; no match to pause yet
PAUSE_ABORT_S          = 60.0  # abort paused match if disconnected this much longer

# Grace period after tag reset (proximity check skipped)
GRACE_TICKS = 30  # 0.5 s at 60 Hz

# Spawn geometry: map-relative positions for a 32x32 tile map at MAP_TILE_SCALE=8.
# Runner and tagger start in opposite quadrants; ghosts spread to remaining corners.
SPAWN_POSITIONS = [
    (-56.0, -56.0),   # player_id 1 - runner  (upper-left)
    ( 56.0,  56.0),   # player_id 2 - tagger  (lower-right)
    (-56.0,  56.0),   # player_id 3 - ghost 1 (lower-left)
    ( 56.0, -56.0),   # player_id 4 - ghost 2 (upper-right)
    (  0.0,   0.0),   # player_id 5 - ghost 3 (centre)
]
SPAWN_ANGLES = [0.0, math.pi, math.pi / 2, 3 * math.pi / 2, math.pi / 4]

# Map
MAP_TILE_SCALE = 8  # world units per tile; must match monitor TILE_SCALE

# Redis keys / channels
REPLAY_KEY      = "game:seda-replay"
EVENTS_KEY      = "game:seda-events"
CONTROL_CHANNEL = "game:control"
