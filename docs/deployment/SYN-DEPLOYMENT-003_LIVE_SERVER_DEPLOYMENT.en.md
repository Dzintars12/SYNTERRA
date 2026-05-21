# SYN-DEPLOYMENT-003 — LIVE SERVER DEPLOYMENT

## Language

EN

## Status

ACTIVE

---

# Purpose

Defines the live deployment process for SYNTERRA production infrastructure.

---

# Deployment Goals

SYNTERRA deployment should support:
- production runtime execution;
- realtime collaboration;
- semantic memory persistence;
- global creator access;
- scalable civilization infrastructure.

---

# Current Deployment Stack

## Frontend
- Next.js
- React
- Vercel-compatible architecture

## Backend
- Node.js runtime
- API routes
- realtime systems
- semantic memory systems

## Infrastructure
- GitHub repository
- Linux server deployment
- PM2/systemd compatible runtime

---

# Deployment Script

```text
scripts/deploy-server.sh
```

This script:
- clones or updates the repository;
- installs dependencies;
- runs typecheck;
- runs tests;
- builds the production application.

---

# Recommended Production Stack

## Runtime
- Ubuntu Server
- Node.js 22+
- PM2
- Nginx reverse proxy

## Database
- PostgreSQL
- Supabase

## Realtime
- WebSocket infrastructure
- Supabase realtime

---

# Main Deployment Sentence

> SYNTERRA deployment infrastructure exists to transform semantic civilization architecture into a living global platform.
