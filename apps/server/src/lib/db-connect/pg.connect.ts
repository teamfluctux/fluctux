import "dotenv/config";

import { BaseConfig, PGDB_CONNECTION_URI } from "@/config";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "@/database/pg"

export const pgDb = drizzle(PGDB_CONNECTION_URI, {
  schema,
  logger: BaseConfig.NODE_ENV !== "production",
  casing: "snake_case",
});
