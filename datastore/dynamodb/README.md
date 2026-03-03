# DynamoDB

DynamoDB is live and acts as the warm metadata tier.

## Current table

- table: `pynq-raycaster-seda-matches`
- partition key: `match_id`
- sort key: `record_type`
- region: `eu-west-2`

## What is stored

- `META`
  - match status
  - start/end times
  - replay pointer
  - summary fields from Lambda
- `TAG#N`
  - per-tag event rows for the current tag game

## What it is for

- recent match listing in the monitor
- durable match metadata
- Lambda-written summaries

## What it is not for

It is no longer treated as the permanent full archive.

The sidecar now keeps it as the warm tier:

- recent completed matches remain in DynamoDB
- older completed matches are archived to S3 and then removed from DynamoDB

## Setup

See [setup_dynamodb.md](/home/akendall/Documents/ServerSide_PYNQ_Raycaster/infra/setup/setup_dynamodb.md).
