
if(!process.env.REDIS_HOST){
    throw new Error("REDIS_HOST is not defined");
}
if(!process.env.REDIS_PORT){
    throw new Error("REDIS_PORT is not defined");
}
if(!process.env.REDIS_PASSWORD){
    throw new Error("REDIS_HOST is not defined");
}
if(!process.env.REDIS_DB){
    throw new Error("REDIS_HOST is not defined");
}
export default {
    host: process.env.REDIS_HOST || 'localhost',
    port: process.env.REDIS_PORT || 6379,
    password: process.env.REDIS_PASSWORD || null,
    db: process.env.REDIS_DB || 0
};