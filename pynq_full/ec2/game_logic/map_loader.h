#pragma once
// ec2/game_logic/map_loader.h
//
// Loads a plain-text map file into a Map struct for C++ authority checks.
//
// Map file format (e.g. maps/level1.txt):
//   '#' = wall tile (1)
//   '.' = empty tile (0)
//   newline = end of row
//
// All rows must be the same length.  Trailing whitespace/CR is ignored.
// The returned MapData owns the tile memory; Map.tiles points into it.

#include "raycaster.h"
#include <string>
#include <vector>

struct MapData {
    std::vector<uint8_t> tiles;   // row-major, width * height bytes
    int                  width  = 0;
    int                  height = 0;

    // Returns a lightweight Map view into this data.
    // Valid only while this MapData object is alive.
    Map view() const {
        return Map{ tiles.data(), width, height };
    }
};

namespace MapLoader {

    // Load a text map file.  Returns an empty MapData (width==0) on failure.
    MapData load(const std::string& path);

}   // namespace MapLoader
