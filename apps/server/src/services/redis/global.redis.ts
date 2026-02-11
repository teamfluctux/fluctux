import { RedisService } from "./redis.service";

class GlobalRedisService extends RedisService {
  async redisCheckConnection() {
    await this.connectRedis();
    const response = await this.pingRedis();
    await this.quitRedis();
    console.log(response);
    return response;
  }
}

export const globalRedisService = new GlobalRedisService();
