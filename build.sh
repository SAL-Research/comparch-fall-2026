#!/usr/bin/env bash
# Build the CS 423/520 course website.
#
# Usage:
#   ./build.sh            build into dist/
#   ./build.sh --test     build, then run the test suite
#   ./build.sh --serve    build, then serve dist/ with live reload
#
# Requires node + npm; installs dependencies on first run.

set -euo pipefail
cd "$(dirname "$0")"

if [ ! -d node_modules ]; then
    echo "Installing dependencies..."
    npm ci
fi

case "${1:-}" in
    --test)
        npm test
        ;;
    --serve)
        npm run build
        echo "Serving dist/ (Ctrl-C to stop)..."
        npx live-server dist --port=8082
        ;;
    "")
        npm run build
        echo "Output: $(pwd)/dist"
        ;;
    *)
        echo "Unknown option: $1 (use --test or --serve)" >&2
        exit 1
        ;;
esac
