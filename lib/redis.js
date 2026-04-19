import redis from 'redis'

class RedisController {
    constructor(options = {}) {
        this.client = redis.createClient(options);
        this.client.on('error', (err) => console.error('Redis Client Error', err));
        this.client.connect();
        console.log(`Redis connected successfully.`)
    }

    async set(key, value, ttl = null) {
        try {
            if (ttl) {
                await this.client.setEx(key, ttl, JSON.stringify(value));
            } else {
                await this.client.set(key, JSON.stringify(value));
            }
        } catch (error) {
            console.error('Error setting cache:', error);
        }
    }

    async get(key) {
        try {
            const value = await this.client.get(key);
            return value ? JSON.parse(value) : null;
        } catch (error) {
            console.error('Error getting cache:', error);
            return null;
        }
    }

    async del(key) {
        try {
            await this.client.del(key);
        } catch (error) {
            console.error('Error deleting cache:', error);
        }
    }

    async exists(key) {
        try {
            return await this.client.exists(key);
        } catch (error) {
            console.error('Error checking cache existence:', error);
            return false;
        }
    }

    async disconnect() {
        await this.client.disconnect();
    }
}

const redisOptions = {
    host: process.env.REDIS_HOST || 'localhost',
    port: process.env.REDIS_PORT || 6379,
    password: process.env.REDIS_PASSWORD || undefined,
    // Add other options as needed, e.g., db: process.env.REDIS_DB || 0
};

const redisInstance = new RedisController(redisOptions);

export default redisInstance;