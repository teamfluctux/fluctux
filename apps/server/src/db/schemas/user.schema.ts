import { pgTable } from "drizzle-orm/pg-core";
import * as t from "drizzle-orm/pg-core"

export const User = pgTable("User", {
    id: t.uuid().defaultRandom().primaryKey(),
    name: t.varchar({length: 200}),
    city: t.varchar({length: 100})
})