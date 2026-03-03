# DynamoDB Setup

## Table

- name: `pynq-raycaster-seda-matches`
- region: `eu-west-2`
- partition key: `match_id` (String)
- sort key: `record_type` (String)
- billing mode: `On-demand`

## What this table stores

- `META` rows
- `TAG#N` rows
- replay pointers
- Lambda summary fields

## Current usage

- the sidecar writes match rows
- Lambda updates the `META` row after `match_end`
- the monitor reads recent warm-tier matches

## Important note

This table is now the warm tier, not the permanent full archive.

Older completed matches are archived to S3 by the sidecar and then removed from
DynamoDB after the archive succeeds.

## Setup

Create the table in the AWS console with the key schema above, then give:

- the EC2 sidecar role write access
- the Lambda role `UpdateItem` access
