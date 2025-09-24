#!/bin/bash

# Test Storybook in CI - handles port conflicts gracefully
set -e

# Function to find an available port
find_available_port() {
  local port=$1
  while lsof -Pi :$port -sTCP:LISTEN -t >/dev/null 2>&1; do
    echo "Port $port is in use, trying $((port + 1))"
    port=$((port + 1))
  done
  echo $port
}

# Function to cleanup background processes
cleanup() {
  echo "Cleaning up background processes..."
  jobs -p | xargs -r kill 2>/dev/null || true
  wait 2>/dev/null || true
}

# Set trap to cleanup on exit
trap cleanup EXIT

echo "Building Storybook..."
pnpm build-storybook --quiet

echo "Finding available port..."
PORT=$(find_available_port 6006)
echo "Using port $PORT"

echo "Starting HTTP server on port $PORT..."
pnpm dlx http-server storybook-static -p $PORT -s &
SERVER_PID=$!

# Wait for server to start
echo "Waiting for server to start..."
for i in {1..30}; do
  if curl -s http://localhost:$PORT >/dev/null 2>&1; then
    echo "Server is ready!"
    break
  fi
  if [ $i -eq 30 ]; then
    echo "Server failed to start within 30 seconds"
    exit 1
  fi
  sleep 1
done

echo "Running Storybook tests..."
pnpm test:stories --url http://localhost:$PORT --failOnConsole --ci --maxWorkers=2

echo "Tests completed successfully!"
