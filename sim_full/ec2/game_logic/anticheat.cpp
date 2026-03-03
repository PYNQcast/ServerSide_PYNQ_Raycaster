#include "anticheat.h"

namespace Anticheat {

bool validate_position(const PlayerState& prev, float new_x, float new_y,
                       float new_angle, uint16_t seq) {
    // TODO: reject stale seq numbers
    // TODO: reject out-of-bounds positions
    // TODO: reject movement delta > MAX_SPEED per tick
    (void)prev; (void)new_x; (void)new_y; (void)new_angle; (void)seq;
    return true;  // accept all for now
}

} // namespace Anticheat
