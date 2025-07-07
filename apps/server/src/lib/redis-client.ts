import { createClient } from "redis";

const redisClient = await createClient()
  .on("error", (err: any) => console.log("Redis Client Error", err))
  .connect();

export default redisClient