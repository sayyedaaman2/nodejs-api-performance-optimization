import cache from '../lib/redis.js'
export default function cacheMiddleware(ttl = 60) {
    return async (req, res, next) => {
        try {
            const key = `${req.method}:${req.originalUrl}`;

            const cached = await cache.get(key);

            if (cached) {
                return res.json(JSON.parse(cached));
            }

            const originalJson = res.json.bind(res);

            res.json = async (data) => {
                try {
                    await cache.set(key, JSON.stringify(data), ttl);
                } catch (err) {
                    console.error("Cache set error:", err);
                }

                return originalJson(data);
            };

            next();
        } catch (err) {
            console.error("Cache middleware error:", err);
            next();
        }
    };
}