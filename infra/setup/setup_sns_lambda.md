# SNS + Lambda Setup

## SNS Topic
- Name: `fpga-raycaster-game-end`
- Type: Standard (not FIFO : delivery order doesn't matter here)
- After creation, copy ARN into `.env` as `SNS_TOPIC_ARN`

## Lambda Function
- Name: `fpga-raycaster-stats-processor`
- Runtime: Python 3.12
- Handler: `handler.handler`
- Timeout: 30 seconds
- Memory: 128 MB

### IAM Role for Lambda
Create `fpga-raycaster-lambda-role` with:
- `AmazonDynamoDBFullAccess` (scoped to fpga-raycaster table)
- `AmazonS3ReadOnlyAccess` (scoped to fpga-raycaster-data bucket)
- `AWSLambdaBasicExecutionRole` (CloudWatch logs)

### Trigger
Subscribe Lambda to the SNS topic:
SNS Console → Subscriptions → Create → Protocol: Lambda → Endpoint: Lambda ARN

### Environment Variables (Lambda Console)
```
AWS_REGION       eu-west-2
DYNAMODB_TABLE   fpga-raycaster
S3_BUCKET        fpga-raycaster-data
```

## Deploy
```bash
bash lambda/deploy.sh
```
