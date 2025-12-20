import { Config } from "@/config";
import { RedisClientType } from "redis";
import { createClient } from "redis";


export class RedisService {
  protected redisClient: RedisClientType;

  constructor() {
    this.redisClient = createClient({
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

    this.redisClient.on("error", (err: any) =>
      console.log("Redis Client Error", err)
    );
    this.redisClient.on("reconnecting", () =>
      console.log(
        "The client is about to try reconnecting after the connection was lost due to an error."
      )
    );
  }

  protected async connect() {
    await this.redisClient.connect();
  }

  protected async quit() {
    await this.redisClient.quit();
  }
}
