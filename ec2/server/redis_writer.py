# ec2/server/redis_writer.py
#
# T4 — RedisWriter
#
# Drains write_queue and batches state updates to Redis.
# Decoupled from the game tick — Redis writes happen asynchronously
# and do not block the T2/T3 hot path.
#
# Two Redis operations:
#   HSET player:<id> x <x> y <y> angle <a>  — live position (overwritten each tick)
#   LPUSH game:events <json>                 — match events (sidecar reads these)
#
# Queue input: {"key": str, "value": str}
#
# Requires: pip install redis

import asyncio

REDIS_HOST = "127.0.0.1"   # TODO: change to ElastiCache endpoint on EC2
REDIS_PORT = 6379

class RedisWriter:
    def __init__(self, write_queue: asyncio.Queue):
        self.queue  = write_queue
        self.client = None

    async def run(self):
        # TODO: connect to Redis using redis.asyncio
        # import redis.asyncio as aioredis
        # self.client = await aioredis.from_url(f"redis://{REDIS_HOST}:{REDIS_PORT}")
        print(f"[T4 RedisWriter] TODO: connect to Redis at {REDIS_HOST}:{REDIS_PORT}")

        while True:
            msg = await self.queue.get()
            await self._write(msg)

    async def _write(self, msg: dict):
        key   = msg["key"]
        value = msg["value"]

        # TODO: replace print with actual Redis write
        # await self.client.set(key, value)
        # For player state use HSET:
        # await self.client.hset(key, mapping={"x": x, "y": y, "angle": angle})
        print(f"[T4] would write: {key} = {value}")

    async def push_event(self, event_json: str):
        # TODO: push match events for the sidecar to pick up
        # await self.client.lpush("game:events", event_json)
        print(f"[T4] would push event: {event_json}")
