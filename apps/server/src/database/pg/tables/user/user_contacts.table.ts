import { timestamps } from "../helper";
import { v4 as uuidv4 } from "uuid";
import { check, pgTable } from "drizzle-orm/pg-core";
import * as t from "drizzle-orm/pg-core";
import { app_users } from "./user.table";
import { sql } from "drizzle-orm";

export const user_contacts = pgTable(
  "user_contacts",
  {
    _id: t.uuid().primaryKey().unique().notNull().$defaultFn(uuidv4),
    user: t.uuid().references(() => app_users._id),
    number: t.varchar({ length: 20 }).array(),
    email: t.varchar({ length: 80 }).array(),
    links: t.text().array(),
    ...timestamps,
  },
  (table) => [
    check("chk_number_len", sql`array_length(${table.number}, 1) <= 3`), // only 3 elements allowed
    check(
      "chk_email_len",
      sql`array_length(${table.email}, 1) <= ${sql.raw("3")}`
    ),
    check(
      "chk_links_len",
      sql`array_length(${table.links}, 1) <= ${sql.raw("3")}`
    ),
    check(
      "chk_links_c_len",
      sql`(SELECT BOOL_AND(LENGTH(link) <= 300) FROM unnest(${table.links}) AS link)`
    ), // error! max length 300 chars
  ]
);
