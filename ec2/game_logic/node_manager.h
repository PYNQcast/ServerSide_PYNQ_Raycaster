#pragma once
#include <cstdint>
#include <unordered_map>
#include <string>
#include "state.h"

// Node manager : tracks registered PYNQ nodes.
// Handles first-contact REGISTER packets, heartbeat TTL, and player_id assignment.
// Accessed only from GameTick thread : no synchronisation needed.

struct NodeInfo {
    uint8_t  player_id;
    uint32_t ip;
    uint16_t port;
    uint64_t last_heartbeat_ms;
    bool     alive;
};

class NodeManager {
public:
    // Register a new node; assigns next available player_id.
    // Returns the assigned player_id, or 0xFF if lobby is full.
    uint8_t register_node(uint32_t ip, uint16_t port);

    // Update heartbeat timestamp for an existing node.
    void heartbeat(uint8_t player_id, uint64_t now_ms);

    // Mark nodes as dead if heartbeat not received within timeout_ms.
    void expire(uint64_t now_ms, uint64_t timeout_ms);

    // Retrieve all alive node endpoints for broadcasting.
    const std::unordered_map<uint8_t, NodeInfo>& nodes() const { return nodes_; }

private:
    std::unordered_map<uint8_t, NodeInfo> nodes_;
    uint8_t                               next_id_{1};
};
