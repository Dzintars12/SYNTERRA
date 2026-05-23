# SYNTERRA GitHub Audit

Date: 2026-05-22
Status: Stabilization phase

## Purpose

This audit records the current GitHub state of SYNTERRA before the project is temporarily paused as a long-term civilization project and before development focus moves to Market Cheat Sheet (MCS).

## Strategic State

SYNTERRA remains the long-term vision and foundation.

MCS becomes the practical economic engine that may later support SYNTERRA development.

## Main GitHub Problem Found

The repository contained two competing homepage structures:

- app/page.tsx
- src/app/page.tsx

This created confusion between repository source, live runtime, build output and deployment expectations.

## Fix Applied

The duplicate root homepage file was removed:

- removed: app/page.tsx

The canonical homepage is now:

- src/app/page.tsx

## New Rule

SYNTERRA uses src/app as the only official app runtime structure.

Root app/ must not be recreated unless the whole project structure is intentionally changed.

## Symbol State

The canonical homepage now contains the SYNTERRA symbol integration:

- real SYNTERRA symbol image
- slow clockwise rotation
- golden glow
- central pulse point
- ENTER route
- DOCUMENTATION route
- system status text

## Existing Documentation

The repository already contains:

- docs/SYNTERRA_DEVELOPMENT_PLAN.md
- docs/SYNTERRA_SYMBOL.md
- scripts/production-deploy.sh

## Remaining GitHub Tasks

Before freezing SYNTERRA:

1. Keep src/app as the single source of truth.
2. Confirm no duplicate app directory remains active.
3. Document the MCS strategic pivot.
4. Add server clean reset plan.
5. Add deployment rules.
6. Add repository structure rules.
7. Confirm clean clone build process.

## Server Note

Server cleanup is postponed.

Known issue: live server folder has diverged history and should later be reset from a clean GitHub clone.

## Freeze Condition

SYNTERRA should be paused only after:

- GitHub structure is stable
- canonical runtime path is clear
- server reset plan exists
- MCS pivot is documented

## Final Statement

SYNTERRA remains the vision.

MCS becomes the engine.

SYNTERRA must be preserved as a stable seed, not as an unclear repository state.
