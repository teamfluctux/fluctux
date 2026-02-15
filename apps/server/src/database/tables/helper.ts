import * as t from "drizzle-orm/pg-core";

export const timestamps = {
  updated_at: t.timestamp(),
  created_at: t.timestamp().defaultNow().notNull(),
  deleted_at: t.timestamp(),
};

export const isDeleted = t.boolean().notNull().default(false)