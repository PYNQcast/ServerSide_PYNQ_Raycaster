#pragma once
// ec2/game_logic/raycaster.h
//
// Generic raycaster engine primitives.
// These are the computationally heavy operations that justify using C++.
// Called from the Python server (T2 GameTick) via subprocess or ctypes .so.
//
// None of these functions are game-specific — they are building blocks
// usable for tag, deathmatch, co-op, or any other raycaster game mode.

#include <cstdint>

// Represents a 2D player or point in world space
struct Vec2 {
    float x;
    float y;
};

// Simplified map — a flat grid of tiles (0 = empty, 1 = wall)
// In the real implementation this will be loaded from a map file.
struct Map {
    const uint8_t* tiles;   // row-major, tiles[y * width + x]
    int            width;
    int            height;
};

namespace Raycaster {

    // Cast a ray from (x, y) in direction `angle` (radians).
    // Returns the distance to the nearest wall, or -1.0 if no wall found within max_dist.
    // This is the core raycaster primitive — hot path, must be fast.
    // TODO: implement DDA (Digital Differential Analysis) ray-march algorithm
    float ray_intersects_wall(float x, float y, float angle, const Map& map, float max_dist);

    // Returns true if there is an unobstructed line of sight between a and b through the map.
    // Used by game logic to determine if players can see each other.
    // TODO: implement by stepping along the line a→b and checking for wall tiles
    bool is_visible(Vec2 a, Vec2 b, const Map& map);

    // Returns the Euclidean distance between two players.
    // Caller decides what to do with the result (tag radius, aggro range, etc.)
    float check_proximity(Vec2 a, Vec2 b);

}   // namespace Raycaster
