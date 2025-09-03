import redisClient from "@/lib/redis-client";

export class RedisService {
  async redisCheckConnection() {
    const response = await redisClient.ping();
    console.log(response);
  }
}
