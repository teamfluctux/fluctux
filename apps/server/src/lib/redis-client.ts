import { createClient } from "redis";
import { config } from "src/config";
const redisClient = await createClient({
    username: config.redis_username,
    password: config.redis_pass,
    socket: {
        host: config.redis_host,
        port: config.redis_port,

        // tls: true,
        // key: fs.readFileSync('./redis_user_private.key'),
        // cert: fs.readFileSync('./redis_user.crt'),
        // ca: [fs.readFileSync('./redis_ca.pem')]
    }
})
  .on("error", (err: any) => console.log("Redis Client Error", err))
  .connect();

export default redisClient