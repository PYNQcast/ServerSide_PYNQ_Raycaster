#!/usr/bin/env bash
# Zip and deploy the stats_processor Lambda.
# Thin wrapper around lambda/deploy.sh kept here for Makefile convenience.
set -euo pipefail
bash "$(dirname "$0")/../../lambda/deploy.sh"
