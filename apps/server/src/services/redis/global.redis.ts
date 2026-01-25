import { RedisService } from "./redis.service";

export class GlobalRedis extends RedisService {
  async redisCheckConnection() {
    await this.connectRedis();
    const response = await this.pingRedis();
    await this.quitRedis();
    console.log(response);
    return response;
  }
}
