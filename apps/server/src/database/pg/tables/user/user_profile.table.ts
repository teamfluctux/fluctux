import { timestamps } from "../helper";
import { v4 as uuidv4 } from "uuid";
import { check, pgTable } from "drizzle-orm/pg-core";
import * as t from "drizzle-orm/pg-core";
import { app_users } from "./user.table";
import { sql } from "drizzle-orm";
import { IMAGE_URL_LENGTH } from "../constant";

export const user_profiles = pgTable(
  "user_profiles",
  {
    _id: t.uuid().primaryKey().unique().notNull().$defaultFn(uuidv4),
    user: t
      .uuid()
      .references(() => app_users._id)
      .notNull(),
    name: t.varchar({ length: 50 }).notNull(),
    avatar: t.text(),
    cover_img: t.text(),
    ...timestamps,
  },
  (table) => [
    // c_len -> character length
    // chk -> check
    check(
      "chk_usr_av_c_len",
      sql`LENGTH(${table.avatar}) < ${sql.raw(`${IMAGE_URL_LENGTH}`)}`
    ),
    check(
      "chk_usr_cvi_c_len",
      sql`LENGTH(${table.cover_img}) < ${sql.raw(`${IMAGE_URL_LENGTH}`)}`
    ),
  ]
);
