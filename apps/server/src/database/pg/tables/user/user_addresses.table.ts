import { timestamps } from "../helper";
import { v4 as uuidv4 } from "uuid";
import { check, pgTable } from "drizzle-orm/pg-core";
import * as t from "drizzle-orm/pg-core";
import { app_users } from "./user.table";
import { relations, sql } from "drizzle-orm";

export const user_addresses = pgTable(
  "user_addresses",
  {
    id: t.uuid().primaryKey().unique().notNull().$defaultFn(uuidv4),
    app_user: t.uuid().references(() => app_users.id, { onDelete: "cascade" }),
    country: t.varchar({ length: 100 }),
    city: t.varchar({ length: 100 }),
    street_address: t.text(),
    state: t.varchar({ length: 50 }),
    zip_code: t.varchar({ length: 10 }),
    ...timestamps,
  },
  (table) => [
    check(
      "chk_straddr_c_len",
      sql`LENGTH(${table.street_address}) < ${sql.raw("601")}`
    ), // max 500 chars
  ]
);

export const userContactRelations = relations(user_addresses, ({ one }) => ({
  app_user: one(app_users, {
    fields: [user_addresses.app_user],
    references: [app_users.id],
  }),
}));
