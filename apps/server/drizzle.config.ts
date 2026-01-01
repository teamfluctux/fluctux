import { DBConfig } from "@/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
    dialect: "postgresql",
    schema: './src/db/schemas',
    out: "./src/db/migrations",
    verbose: true,
    strict: true,
    dbCredentials: {
        url: DBConfig.DATABASE_URL_1 as string
    },
    migrations:{
        schema: "public"
    }
})