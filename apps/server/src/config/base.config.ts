import "dotenv/config";

interface BaseConfigType {
  PORT: number;
  NODE_ENV: string;
}

export const BaseConfig: BaseConfigType = {
  PORT: Number(process.env.PORT) || 5000,
  NODE_ENV: process.env.NODE_ENV || "development",
};
