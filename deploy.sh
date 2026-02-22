#!/usr/bin/env bash
set -euo pipefail

if ! command -v docker >/dev/null 2>&1; then
  echo "Error: docker is not installed." >&2
  exit 1
fi

if ! docker compose version >/dev/null 2>&1; then
  echo "Error: docker compose is not available." >&2
  exit 1
fi

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT_DIR"

echo "[1/3] Pulling/building image..."
docker compose build

echo "[2/3] Starting containers..."
docker compose up -d

echo "[3/3] Current status:"
docker compose ps

echo "Deployment complete. App should be available at http://localhost:3004"
