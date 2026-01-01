type RedisConfigType = {
  redis_host: string;
  redis_pass: string;
  redis_username: string;
  redis_port: number;
}

export const RedisConfig: RedisConfigType = {
  redis_host: process.env.REDIS_HOST || "localhost",
  redis_username: process.env.REDIS_USERNAME || "default",
  redis_pass: process.env.REDIS_PASS || "default",
  redis_port: Number(process.env.REDIS_PORT) || 6379,
};
