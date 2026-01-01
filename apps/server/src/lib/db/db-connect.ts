import { BaseConfig, DBConfig } from "@/config";
import "dotenv/config"
import { drizzle } from 'drizzle-orm/node-postgres';

const db = drizzle(DBConfig.DATABASE_URL_1 as string, {logger: !BaseConfig.isProduction});

export { db }