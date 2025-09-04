import { RedisService } from "./redis.conf";

export class RedisManager extends RedisService {
    async redisCheckConnection() {
        await this.connect()
        const response = await this.redisClient.ping();
        await this.quit()
        console.log(response);
        return response
    }
}