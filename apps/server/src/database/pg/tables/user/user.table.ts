import { uniqueIndex, pgTable, pgEnum } from "drizzle-orm/pg-core";
import * as t from "drizzle-orm/pg-core";
import { v4 as uuidv4 } from "uuid";
import {
  USER_ACCOUNT_STATUS_VALUES,
  USER_ACCOUNT_PROVIDER_VALUES,
} from "@fluctux/constants";
import { isDeleted, timestamps } from "../helper";

export const PG_USER_ACCOUNT_PROVIDER_E = pgEnum(
  "user_account_provider_enum",
  USER_ACCOUNT_PROVIDER_VALUES
);
export const PG_USER_ACCOUNT_STATUS_E = pgEnum(
  "user_account_status_enum",
  USER_ACCOUNT_STATUS_VALUES
);

export const app_users = pgTable(
  "app_users",
  {
    _id: t
      .uuid()
      .primaryKey()
      .$defaultFn(uuidv4)
      .notNull()
      .unique("user_id_unique"),
    email: t.varchar({ length: 100 }).notNull().unique(),
    username: t.varchar({ length: 30 }).notNull(),
    password: t.varchar({ length: 30 }).notNull(),
    account_provider: PG_USER_ACCOUNT_PROVIDER_E().default("MANUAL").notNull(),
    account_status: PG_USER_ACCOUNT_STATUS_E().default("NORMAL"),
    is_verified: t.boolean().notNull().default(false),
    verify_code: t.varchar({ length: 8 }),
    verify_expiry: t.timestamp(),
    is_deleted: isDeleted,
    ...timestamps,
  },
  // unq -> unique
  // i -> index
  (table) => [uniqueIndex("unq_usr_uname_i").on(table.username)]
);
