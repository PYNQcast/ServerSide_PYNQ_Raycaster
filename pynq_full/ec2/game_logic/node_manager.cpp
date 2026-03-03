#include "node_manager.h"

uint8_t NodeManager::register_node(uint32_t ip, uint16_t port) {
    // TODO: assign player_id, store NodeInfo, reject if full
    (void)ip; (void)port;
    return next_id_++;
}

void NodeManager::heartbeat(uint8_t player_id, uint64_t now_ms) {
    // TODO: update last_heartbeat_ms for player_id
    (void)player_id; (void)now_ms;
}

void NodeManager::expire(uint64_t now_ms, uint64_t timeout_ms) {
    // TODO: mark nodes dead if (now_ms - last_heartbeat_ms) > timeout_ms
    (void)now_ms; (void)timeout_ms;
}
