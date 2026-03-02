# SNS + Lambda Setup

This is the post-match path:

```text
sidecar.py
  → publishes "match_end" to SNS
    → Lambda subscribes to that topic
      → Lambda reads the replay from S3
      → Lambda updates the META row in DynamoDB
```

## SNS Topic (AWS Console)

Create a Standard topic:

- Name: `fpga-raycaster-game-end`
- Type: `Standard`

You can let the sidecar resolve the topic automatically by name. If you want to pin the exact topic, copy its ARN and set:

```text
SNS_TOPIC_ARN=arn:aws:sns:eu-west-2:...
```

Otherwise the sidecar defaults to:

```text
SNS_TOPIC_NAME=fpga-raycaster-game-end
```

and calls `CreateTopic`/`Publish` against that name.

## EC2 Sidecar IAM

The EC2 instance role (or AWS credentials used on EC2) needs:

- `sns:Publish`
- `sns:CreateTopic` if you want the sidecar to auto-resolve by topic name

## Lambda Function (AWS Console)

Create:

- Name: `fpga-raycaster-stats-processor`
- Runtime: `Python 3.12`
- Handler: `handler.handler`
- Timeout: `30 seconds`
- Memory: `128 MB`

Upload code from:

```bash
bash lambda/deploy.sh
```

That creates `/tmp/fpga-raycaster-stats-processor.zip`, which you can upload in the Lambda console.

## Lambda IAM Role

Create a role for the Lambda with:

- `AWSLambdaBasicExecutionRole`
- `dynamodb:UpdateItem` on the `pynq-raycaster-seda-matches` table
- `s3:GetObject` on `arn:aws:s3:::fpga-raycaster-data/replays/*`

## Lambda Environment Variables

Set these in the Lambda console:

```text
AWS_REGION      eu-west-2
DYNAMODB_TABLE  pynq-raycaster-seda-matches
```

## SNS Trigger

Subscribe the Lambda to the SNS topic:

1. Open the SNS topic
2. Create subscription
3. Protocol: `AWS Lambda`
4. Endpoint: `fpga-raycaster-stats-processor`

## What Success Looks Like

After a match ends:

1. Sidecar updates the `META` row to `status=completed`
2. Sidecar uploads the replay to S3
3. Sidecar publishes SNS
4. Lambda runs automatically
5. The same `META` row gains summary fields such as:
   - `summary_processed_at`
   - `summary_event_count`
   - `summary_tag_events`
   - `summary_winner`
