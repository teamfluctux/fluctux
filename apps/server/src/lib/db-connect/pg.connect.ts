import 'dotenv/config';

import { BaseConfig, PGDB_CONNECTION_URI } from '@/config';
import { drizzle } from "drizzle-orm/node-postgres";

export const pgConnect = drizzle(PGDB_CONNECTION_URI,
    {
        logger: BaseConfig.NODE_ENV !== "production",
        casing: "snake_case"
    }
);