import { pgTable, pgEnum } from "drizzle-orm/pg-core"
import * as t from "drizzle-orm/pg-core"
import { v4 as uuidv4 } from "uuid"
import { USER_ACCOUNT_STATUS_VALUES, USER_ACCOUNT_PROVIDER_VALUES } from "@fluctux/constants"
import { timestamps } from "../helper"

export const PG_USER_ACCOUNT_PROVIDER_E = pgEnum("user_account_provider_enum", USER_ACCOUNT_PROVIDER_VALUES)
export const PG_USER_ACCOUNT_STATUS_E = pgEnum("user_account_status_enum", USER_ACCOUNT_STATUS_VALUES)

export const app_user = pgTable("app_user", {
    user_id: t.uuid().primaryKey().$defaultFn(uuidv4).notNull().unique(),
    name: t.varchar({ length: 100 }).notNull(),
    avatar: t.varchar({ length: 500 }),
    cover_img: t.varchar({ length: 500 }),
    email: t.varchar({ length: 100 }).notNull().unique(),
    username: t.varchar({ length: 30 }).notNull().unique(),
    password: t.varchar({ length: 30 }).notNull(),
    account_provider: PG_USER_ACCOUNT_PROVIDER_E().default("MANUAL").notNull(),
    account_status: PG_USER_ACCOUNT_STATUS_E().default("NORMAL"),
    is_verified: t.boolean().notNull().default(false),  
    verify_code: t.varchar({length: 8}),
    verify_expiry: t.timestamp(),
    ...timestamps
}) 