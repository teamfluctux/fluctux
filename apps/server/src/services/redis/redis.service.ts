import { Config } from "@/config";
import { RedisClientType } from "redis";
import { createClient } from "redis";

export abstract class RedisService {
  public static instance: RedisService | null = null;
  private static client: RedisClientType | null = null;
  protected redisClient!: RedisClientType;

  constructor() {
    if (RedisService.instance) {
      return RedisService.instance as RedisService;
    }

    if (!RedisService.client) {
      RedisService.client = createClient({
        username: `${Config.redis_username}`,
        password: `${Config.redis_pass}`,
        disableOfflineQueue: true, // disable queuing data when connection is down.
        socket: {
          host: `${Config.redis_host}`,
          port: Number(Config.redis_port),
          reconnectStrategy: (retries) => {
            // Generate a random jitter between 0 – 100 ms:
            const jitter = Math.floor(Math.random() * 100);

            // Delay is an exponential backoff, (2^retries) * 50 ms, with a
            // maximum value of 3000 ms:
            const delay = Math.min(Math.pow(2, retries) * 50, 3000);

            return delay + jitter;
          },
          connectTimeout: 10000, // in milliseconds

          // tls: true,
          // key: fs.readFileSync('./redis_user_private.key'),
          // cert: fs.readFileSync('./redis_user.crt'),
          // ca: [fs.readFileSync('./redis_ca.pem')]
        },
      });

      RedisService.client.on("error", (err: any) =>
        console.log("Redis Client Error", err)
      );

      RedisService.client.on("reconnecting", () =>
        console.log(
          "The client is about to try reconnecting after the connection was lost due to an error."
        )
      );
    }

    this.redisClient = RedisService.client;
    RedisService.instance = this;
  }

  async connectRedis() {
    if (this.redisClient.isOpen) return;
    await this.redisClient.connect();
    console.log("Redis connected");
  }

  async quitRedis() {
    if (!this.redisClient.isOpen) return;
    await this.redisClient.quit();
    console.log("Redis disconnected");
  }

  async pingRedis() {
    return await this.redisClient.ping();
  }
}
