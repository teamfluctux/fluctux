import dotenv from "dotenv";

dotenv.config();

interface ConfigType {
  port: number;
  nodeEnv: string;
  redis_host: string;
  redis_pass: string;
  redis_username: string;
  redis_port: number;
}

export const Config: ConfigType = {
  port: Number(process.env.PORT) || 5000,
  nodeEnv: process.env.NODE_ENV || "development",
  redis_host: process.env.REDIS_HOST || "localhost",
  redis_username: process.env.REDIS_USERNAME || "default",
  redis_pass: process.env.REDIS_PASS || "default",
  redis_port: Number(process.env.REDIS_PORT) || 6379,
};
