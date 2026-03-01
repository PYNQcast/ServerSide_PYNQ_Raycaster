// ec2/game_logic/raycaster.cpp
//
// Generic raycaster engine primitives : stubs with TODOs.
// See raycaster.h for documentation on each function.

#include "raycaster.h"
#include <cmath>

namespace Raycaster {

float ray_intersects_wall(float x, float y, float angle, const Map& map, float max_dist) {
    // TODO: implement DDA ray-march
    //
    // DDA (Digital Differential Analysis) steps through the grid cell-by-cell
    // along the ray direction. At each cell boundary it checks if the tile is a wall.
    // This is exactly how classic Wolfenstein 3D / DOOM raycasting works.
    //
    // High-level steps:
    //   1. Compute ray direction vector from angle
    //   2. Compute initial step distances to first x and y grid lines
    //   3. Step along whichever axis is closer, check tile
    //   4. If wall tile found, compute exact hit distance and return
    //   5. If max_dist exceeded, return -1.0
    (void)x; (void)y; (void)angle; (void)map; (void)max_dist;
    return -1.0f;
}

bool is_visible(Vec2 a, Vec2 b, const Map& map) {
    // TODO: cast a ray from a toward b, check for wall intersections
    // Can reuse ray_intersects_wall : if hit distance >= distance(a,b), LOS is clear
    (void)a; (void)b; (void)map;
    return true;
}

float check_proximity(Vec2 a, Vec2 b) {
    float dx = a.x - b.x;
    float dy = a.y - b.y;
    return std::sqrt(dx * dx + dy * dy);
}

}   // namespace Raycaster
