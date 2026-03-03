#pragma once
#include <cstdint>
#include <unordered_map>
#include <string>

// Shared game state structs.
// GameState lives entirely in Thread 2 (GameTick) : no shared access across threads.
// Snapshots are serialised into BroadcastMsg / WriteMsg before being pushed to queues.

struct PlayerState {
    uint8_t  player_id;
    float    x;
    float    y;
    float    angle;
    bool     tagged;
    uint16_t seq;           // last accepted sequence number (for drop detection)
    uint64_t last_seen_ms;  // wall-clock ms of last valid packet
    uint32_t src_ip;
    uint16_t src_port;
};

struct MatchConfig {
    uint32_t seed;          // map generation seed
    uint8_t  tick_rate;     // ticks per second
    uint8_t  max_players;
    // TODO: add tag rules, time limit, etc.
};

struct GameState {
    std::unordered_map<uint8_t, PlayerState> players;  // player_id → state
    MatchConfig config;
    uint32_t    match_id;
    uint64_t    match_start_ms;
    bool        active;
};
