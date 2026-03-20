# anticheat.py - Server-side position validation and proximity helpers.
# Every incoming position update passes through here before T2 accepts it.
# validate_position: rejects implausible speed or out-of-bounds moves.
# distance_between: Euclidean distance used by CoreLogic for tag detection.

import math

DEFAULT_MAX_SPEED_PER_TICK = 12.0


# Stateless helper; instantiate once in PacketHandler/CoreLogic or call static methods directly.
class Anticheat:

    # Returns True if the new position is plausible; False if it should be dropped.
    @staticmethod
    def validate_position(prev_seq, prev_x, prev_y, prev_angle,
                          new_x, new_y, new_angle, seq,
                          min_x, min_y, max_x, max_y,
                          max_speed_per_tick=DEFAULT_MAX_SPEED_PER_TICK):
        del prev_angle, new_angle
        delta = (seq - prev_seq) & 0xFFFF
        if delta == 0 or delta > 0x7FFF:
            return False
        if new_x < min_x or new_x > max_x or new_y < min_y or new_y > max_y:
            return False
        dx = new_x - prev_x
        dy = new_y - prev_y
        allowed_distance = max_speed_per_tick * max(1, delta)
        return (dx * dx) + (dy * dy) <= (allowed_distance * allowed_distance)

    # Euclidean distance between two world-space points.
    @staticmethod
    def distance_between(ax, ay, bx, by):
        return math.hypot(ax - bx, ay - by)
