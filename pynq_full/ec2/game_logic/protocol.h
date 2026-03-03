#pragma once
#include <cstdint>

// Packet format : must exactly match interfacing/protocol.py byte layout.
// All multi-byte fields are little-endian.

// ── Node → Server (24 bytes) ────────────────────────────────────────────────
// Offset  Size  Field
//   0       2   type      (uint16) packet type (see PacketType enum)
//   2       2   seq       (uint16) sender sequence number
//   4       4   timestamp (uint32) sender millisecond timestamp
//   8       4   x         (float)  world-space X position
//  12       4   y         (float)  world-space Y position
//  16       4   angle     (float)  view angle radians
//  20       1   flags     (uint8)  bit flags (shooting, tagged, etc.)
//  21       3   pad       reserved, zero

// ── Server → Node (header 8 bytes + 14 bytes per player) ────────────────────
// Offset  Size  Field
//   0       2   type      (uint16)
//   2       2   seq       (uint16)
//   4       4   timestamp (uint32)
// Per player entry (up to MAX_PLAYERS):
//   0       1   player_id (uint8)
//   1       4   x         (float)
//   5       4   y         (float)
//   9       4   angle     (float)
//  13       1   flags     (uint8)

enum class PacketType : uint16_t {
    STATE_UPDATE  = 0x0001,  // node → server
    GAME_STATE    = 0x0002,  // server → node
    HEARTBEAT     = 0x0010,  // node → server
    REGISTER      = 0x0020,  // node → server, first contact
    ACK           = 0x0030,  // server → node
};

#pragma pack(push, 1)
struct NodePacket {
    uint16_t type;
    uint16_t seq;
    uint32_t timestamp;
    float    x;
    float    y;
    float    angle;
    uint8_t  flags;
    uint8_t  pad[3];
};
static_assert(sizeof(NodePacket) == 24, "NodePacket must be 24 bytes");

struct PlayerEntry {
    uint8_t  player_id;
    float    x;
    float    y;
    float    angle;
    uint8_t  flags;
};
static_assert(sizeof(PlayerEntry) == 14, "PlayerEntry must be 14 bytes");

struct ServerPacketHeader {
    uint16_t type;
    uint16_t seq;
    uint32_t timestamp;
};
static_assert(sizeof(ServerPacketHeader) == 8, "ServerPacketHeader must be 8 bytes");
#pragma pack(pop)

// Queue message types used between threads
struct RawPacket {
    uint8_t  data[256];
    uint16_t len;
    uint32_t src_ip;
    uint16_t src_port;
};

struct BroadcastMsg {
    uint8_t  data[512];
    uint16_t len;
    // TODO: add target (all / specific node_id)
};

struct WriteMsg {
    // TODO: define Redis write payload (key, fields, values)
    char key[64];
    char value[256];
};
