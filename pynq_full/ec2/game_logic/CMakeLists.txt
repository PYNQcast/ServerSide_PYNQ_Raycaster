cmake_minimum_required(VERSION 3.20)
project(game_logic CXX)

set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

include_directories(.)

# Build as a shared library (.so) so Python (T2) can call it via ctypes
add_library(game_logic SHARED
    raycaster.cpp
    anticheat.cpp
    node_manager.cpp
    map_loader.cpp
)

# Alternatively, build as a standalone binary for subprocess calls
add_executable(game_logic_bin
    raycaster.cpp
    anticheat.cpp
    node_manager.cpp
    map_loader.cpp
)
target_compile_definitions(game_logic_bin PRIVATE STANDALONE_BINARY)
