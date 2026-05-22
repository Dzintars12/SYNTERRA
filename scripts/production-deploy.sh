#!/usr/bin/env bash
set -e

APP_DIR=${APP_DIR:-/SYNTERRA}
APP_NAME=${APP_NAME:-synterra}
BRANCH=${BRANCH:-main}

cd "$APP_DIR"

echo "=== SYNTERRA PRODUCTION DEPLOY ==="
echo "Directory: $APP_DIR"
echo "Branch: $BRANCH"
echo "App: $APP_NAME"

git fetch origin "$BRANCH"
git reset --hard "origin/$BRANCH"

npm install
npm run typecheck
npm test
npm run build

pm2 restart "$APP_NAME" || pm2 start npm --name "$APP_NAME" -- start
pm2 save

echo "=== SYNTERRA DEPLOY COMPLETE ==="
