import "dotenv/config"

interface RedisConfigType {
    REDIS_HOST: string;
    REDIS_PASS: string;
    REDIS_USERNAME: string;
    REDIS_PORT: number;
}

export const RedisConfig: RedisConfigType = {
    REDIS_HOST: process.env.REDIS_HOST || "localhost",
    REDIS_USERNAME: process.env.REDIS_USERNAME || "default",
    REDIS_PASS: process.env.REDIS_PASS || "default",
    REDIS_PORT: Number(process.env.REDIS_PORT) || 6379,
}