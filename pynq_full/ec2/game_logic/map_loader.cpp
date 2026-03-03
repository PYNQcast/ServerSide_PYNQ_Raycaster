// ec2/game_logic/map_loader.cpp

#include "map_loader.h"
#include <fstream>
#include <iostream>
#include <string>

namespace MapLoader {

MapData load(const std::string& path) {
    MapData result;
    std::ifstream f(path);
    if (!f.is_open()) {
        std::cerr << "[map_loader] cannot open: " << path << "\n";
        return result;
    }

    std::string line;
    while (std::getline(f, line)) {
        // Strip trailing CR (Windows line endings)
        if (!line.empty() && line.back() == '\r') {
            line.pop_back();
        }
        if (line.empty()) continue;

        // First row sets the expected width
        if (result.width == 0) {
            result.width = static_cast<int>(line.size());
        } else if (static_cast<int>(line.size()) != result.width) {
            std::cerr << "[map_loader] row width mismatch at row "
                      << result.height << " (expected " << result.width
                      << ", got " << line.size() << ")\n";
            return MapData{};   // return empty on malformed input
        }

        for (char c : line) {
            result.tiles.push_back(c == '#' ? 1u : 0u);
        }
        result.height++;
    }

    std::cout << "[map_loader] loaded " << path
              << "  " << result.width << "x" << result.height << "\n";
    return result;
}

}   // namespace MapLoader
