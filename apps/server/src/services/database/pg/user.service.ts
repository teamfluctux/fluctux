
import { pgDb } from "@/lib/db-connect";
import { and, eq, sql, type InferColumnsDataTypes } from "drizzle-orm";
import type { PgColumn } from "drizzle-orm/pg-core";




export const user = await pgDb.query.app_users.findFirst({
    columns: {
        _id: true,
        username: true
    }
}).prepare("user")