# S3

**Not needed yet.** Build this after DynamoDB writes are working.

**Owner: open for the team — extends the sidecar with a few extra boto3 calls.**

---

## What it is

S3 stores replay files and game snapshots as cheap long-term storage. Written by the sidecar after a match ends — nothing in the game loop touches S3.

```
Sidecar (on match end)
  → uploads replay JSON to S3
  → dashboard can link to it via a pre-signed URL
```

## What it could store

**Replays** — the full event log for a match (every position update, every tag event)
```
s3://fpga-raycaster-data/replays/<match_id>.json
```
Lets you play back any match after the fact. Could be partitioned by date for Athena queries later.

**Snapshots** — periodic mid-game state dumps (e.g. every 30 seconds)
```
s3://fpga-raycaster-data/snapshots/<match_id>/<tick>.json
```
Useful if the server crashes mid-match — you have something to recover from.

## What to build

Create `s3_client.py` in this folder with a single function to start:

```python
import boto3, json, os

s3 = boto3.client("s3")
BUCKET = os.environ["S3_BUCKET"]

def upload_replay(match_id, events):
    key = f"replays/{match_id}.json"
    s3.put_object(Bucket=BUCKET, Key=key, Body=json.dumps(events))
    return key
```

Call it from the sidecar after the DynamoDB write succeeds. Add compression and date partitioning once the basic upload is working.

## When to build it

1. DynamoDB writes must be working in the sidecar first
2. Create the bucket (`python s3/create_bucket.py` — write this when ready)
3. Get one replay file appearing in the S3 console
4. Store the S3 key in DynamoDB so the dashboard can find it

## Setup notes

See `infra/setup/setup_s3.md`.
