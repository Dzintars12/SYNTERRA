# SYNTERRA ASSET MIGRATION MANIFEST

## Date

21.05.2026

---

# Purpose

This document tracks binary and visual assets that must be verified before legacy repositories are deleted.

---

# Legacy Asset Sources

```text
Dzintars12/SYNTERRA-EN/assets/
Dzintars12/SYNTERRA-LV/assets/
```

---

# Known Asset Inventory

| Asset | Source Repository | Source Path | Status | Notes |
|---|---|---|---|---|
| SYNTERRA.png | Dzintars12/SYNTERRA-EN | assets/SYNTERRA.png | NEEDS MANUAL COPY | GitHub tool detected binary blob SHA but could not copy binary content |

---

# Known Binary SHA

```text
SYNTERRA.png
SHA: 798d62cb728323bd23fe64d0e736f3eacff0b5ef
```

---

# Current State

The gateway UI was migrated into:

```text
gateway/index.html
```

However, the original image asset still requires manual verification or upload into:

```text
assets/SYNTERRA.png
```

---

# Safe Deletion Rule

Do not delete SYNTERRA-EN until this file is manually copied or intentionally replaced.

---

# Recommended Action

Download from legacy repository:

```text
Dzintars12/SYNTERRA-EN/assets/SYNTERRA.png
```

Then upload to:

```text
Dzintars12/SYNTERRA/assets/SYNTERRA.png
```
