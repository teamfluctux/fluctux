import { pgTable } from "drizzle-orm/pg-core"
import * as t from "drizzle-orm/pg-core"
import { v4 as uuidv4 } from "uuid"

export const app_user = pgTable("app_user", {
    user_id: t.uuid().primaryKey().$defaultFn(uuidv4).notNull().unique(),
    name: t.varchar({length: 100}).notNull(),
    avatar: t.varchar(),
    cover_img: t.varchar(),
    email: t.varchar({length: 100}).notNull().unique()
}) 