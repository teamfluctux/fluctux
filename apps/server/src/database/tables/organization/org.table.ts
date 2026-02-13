import { pgTable } from "drizzle-orm/pg-core";
import * as t from "drizzle-orm/pg-core"
import { v4 as uuidv4 } from "uuid";
import { app_user } from "../user";

export const organization = pgTable("organization", {
    org_id: t.uuid().primaryKey().unique().notNull().$defaultFn(uuidv4),
    admin: t.uuid().references(() => app_user.user_id).notNull(),
    org_avatar: t.varchar({ length: 500 }),
    org_cover_img: t.varchar({ length: 500 }),
})