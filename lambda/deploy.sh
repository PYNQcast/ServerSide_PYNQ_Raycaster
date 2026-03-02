#!/bin/bash
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC_DIR="$REPO_ROOT/lambda/stats_processor"
ZIP_PATH="/tmp/fpga-raycaster-stats-processor.zip"

rm -f "$ZIP_PATH"

if command -v zip >/dev/null 2>&1; then
  (
    cd "$SRC_DIR"
    zip -q -j "$ZIP_PATH" handler.py
  )
else
  python3 -c 'import sys, zipfile; src, dst = sys.argv[1], sys.argv[2]; zf = zipfile.ZipFile(dst, "w", zipfile.ZIP_DEFLATED); zf.write(src, "handler.py"); zf.close()' \
    "$SRC_DIR/handler.py" "$ZIP_PATH"
fi

echo "Created $ZIP_PATH"
echo "Upload with:"
echo "aws lambda update-function-code \\"
echo "  --function-name fpga-raycaster-stats-processor \\"
echo "  --zip-file fileb://$ZIP_PATH"
