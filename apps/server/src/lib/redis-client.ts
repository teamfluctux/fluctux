import { createClient } from "redis";
import fs from "fs"
const redisClient = await createClient({
    // url: "",
    // username: 'default', // use your Redis user. More info https://redis.io/docs/latest/operate/oss_and_stack/management/security/acl/
    // password: 'secret', // use your password here
    socket: {
        host: 'localhost',
        port: 6379,
        // tls: true,
        // key: fs.readFileSync('./redis_user_private.key'),
        // cert: fs.readFileSync('./redis_user.crt'),
        // ca: [fs.readFileSync('./redis_ca.pem')]
    }
})
  .on("error", (err: any) => console.log("Redis Client Error", err))
  .connect();

export default redisClient