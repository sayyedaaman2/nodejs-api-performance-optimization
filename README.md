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

---

## Tech Stack ⚙️

- Node.js
- Express.js
- MongoDB (Mongoose)

---

## Getting Started 🚀

### Install dependencies

```bash
npm install
```


### Run on Development

```bash
npm run dev
```

### Run on Production

```bash
npm start
```
---

### Project Structure 📁
```folder structure
.
├─ .git (excluded)
├─ config
│  ├─ db.config.js
│  ├─ env.js
│  └─ server.config.js
├─ controller
│  ├─ fastapi.controller.js
│  └─ slowapi.controller.js
├─ lib
│  └─ database.js
├─ logs
│  └─ app.log
├─ middleware
│  ├─ corsMiddleware.js
│  ├─ errorHandler.js
│  ├─ loggerMiddleware.js
│  └─ rateLimitMiddleware.js
├─ model
│  ├─ order.model.js
│  └─ user.model.js
├─ node_modules (excluded)
├─ route
│  └─ index.js
├─ script
│  └─ seed.js
├─ util
│  └─ logger.js
├─ .env.development (excluded)
├─ .env.sample (excluded)
├─ .gitignore (excluded)
├─ nodemon.json
├─ package-lock.json
├─ package.json
├─ README.md
└─ server.js


```

---
### Dependencies 📦

- express
- mongoose
- cors
- dotenv
- cookie-parser
- express-rate-limit
- winston

---


### Dev Dependencies 🛠️

- nodemon