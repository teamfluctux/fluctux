import { PGDB_CONNECTION_URI } from "./src/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/database/pg/tables/index.ts",
  out: "./src/database/pg/migrations",
  verbose: true,
  strict: true,
  dbCredentials: {
    url: PGDB_CONNECTION_URI,
  },
  migrations: {
    schema: "public",
  },
  introspect: {
    casing: "preserve",
  },
});
