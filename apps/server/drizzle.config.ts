import { PGDB_CONNECTION_URI } from "./src/config"
import { defineConfig } from "drizzle-kit";

export default defineConfig({
    dialect: "postgresql",
    schema: './src/database/tables/index.ts',
    out: "./src/database/migrations",
    verbose: true,
    strict: true,
    dbCredentials: {
        url: PGDB_CONNECTION_URI
    },
    introspect: {
        casing: "preserve"
    }
})