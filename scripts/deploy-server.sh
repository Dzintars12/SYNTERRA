#!/usr/bin/env bash
set -e

APP_DIR=${APP_DIR:-/var/www/synterra}
REPO_URL=${REPO_URL:-https://github.com/Dzintars12/SYNTERRA.git}
NODE_ENV=${NODE_ENV:-production}
PORT=${PORT:-3000}

echo "=== SYNTERRA SERVER DEPLOYMENT ==="
echo "App directory: $APP_DIR"
echo "Repository: $REPO_URL"
echo "Node environment: $NODE_ENV"
echo "Port: $PORT"

if [ ! -d "$APP_DIR" ]; then
  echo "Creating app directory..."
  sudo mkdir -p "$APP_DIR"
  sudo chown -R "$USER":"$USER" "$APP_DIR"
fi

if [ ! -d "$APP_DIR/.git" ]; then
  echo "Cloning SYNTERRA repository..."
  git clone "$REPO_URL" "$APP_DIR"
else
  echo "Updating SYNTERRA repository..."
  cd "$APP_DIR"
  git pull origin main
fi

cd "$APP_DIR"

echo "Installing dependencies..."
npm install

echo "Running typecheck..."
npm run typecheck

echo "Running tests..."
npm test

echo "Building production app..."
npm run build

echo "SYNTERRA build completed."
echo "Start manually with: PORT=$PORT npm run start"
echo "Or configure PM2/systemd for persistent production runtime."
