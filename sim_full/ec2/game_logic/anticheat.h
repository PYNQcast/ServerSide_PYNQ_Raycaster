#pragma once
#include "state.h"

// Anticheat : called by GameTick for each incoming position update.
// Keeps all validation logic isolated so it's easy to adjust thresholds.

namespace Anticheat {

    // Returns true if the new position is plausible given the previous state.
    // Rejects if: movement delta > MAX_POSITION_DELTA, position out of map bounds,
    // or sequence number is stale/replayed.
    bool validate_position(const PlayerState& prev, float new_x, float new_y,
                           float new_angle, uint16_t seq);

    // TODO: add wall-penetration check (ray-cast against map grid)
    // TODO: add rate-limit check (packet flood detection)

} // namespace Anticheat
