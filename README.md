# nodejs-api-performance-optimization 🏁

### Reduced Node.js API latency from **2.79s → 46ms**

---

## Problems 🐞

The API performance issues were caused by:

- N+1 queries (multiple DB calls)
- Missing indexes
- Over-fetching unnecessary data
- No pagination

---

## Before 💔

- Response time: **~2.80s (2000ms)**
- DB calls: **200+**

---

## After 💝

- Response time: **~46ms**
- DB calls: **1 (aggregation)**

---

## Fixes 💚

- Replaced loop-based queries with aggregation
- Added index on `userId`
- Selected only required fields
- Implemented pagination

---

## Key Insight 🧠

The bottleneck wasn’t Node.js — it was inefficient database access.