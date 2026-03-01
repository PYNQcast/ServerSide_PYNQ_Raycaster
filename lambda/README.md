# Lambda

**Not needed yet.** Build this after the sidecar is writing to DynamoDB successfully.

**Owner: open for the team : pure Python, no C++, no real-time constraints.**

---

## What it is

A serverless Python function that runs automatically after every match. It is triggered by an SNS notification that the sidecar publishes when a match ends.

```
Sidecar
  → publishes to SNS topic "fpga-raycaster-game-end"
    → Lambda wakes up automatically
      → reads match data from DynamoDB
      → computes stats
      → writes results back
```

You don't run or manage it : AWS invokes it in response to the SNS message. It scales automatically, costs essentially nothing at our volume, and if it fails it can be retried without affecting the game.

## What it could do

**Post-game stats processing**
- Read the match result and per-player rows written by the sidecar
- Compute derived stats: who tagged whom, time-to-first-tag, average RTT across the match
- Write a summary back to DynamoDB for the dashboard to display

**Player profile updates**
- Increment lifetime win/loss/tag counters for each player using DynamoDB `UpdateItem` with `ADD` expressions (atomic increment : no read-modify-write needed)

**Replay indexing**
- Generate a pre-signed S3 URL for the replay file uploaded by the sidecar
- Store the URL in DynamoDB so the dashboard can link to it

## When to build it

1. Sidecar must be writing match results to DynamoDB first
2. SNS topic must exist (`infra/setup/setup_sns_lambda.md`)
3. Create the Lambda function in AWS console (Python 3.12, 128 MB, 30s timeout)
4. Subscribe it to the SNS topic
5. Start with just printing the `match_id` : confirm it triggers correctly
6. Add stat computation once the trigger is confirmed working

## Structure (when you build it)

```
lambda/
  stats_processor/
    handler.py          # entry point : def handler(event, context)
    requirements.txt    # boto3 is pre-installed on Lambda, list any extras here
  deploy.sh             # zip handler.py and push to AWS with the CLI
```

## Setup notes

See `infra/setup/setup_sns_lambda.md`.
