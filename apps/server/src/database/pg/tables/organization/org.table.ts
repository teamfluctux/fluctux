import { pgTable, pgEnum, uniqueIndex } from "drizzle-orm/pg-core";
import { check } from "drizzle-orm/pg-core";
import * as t from "drizzle-orm/pg-core";
import { v4 as uuidv4 } from "uuid";
import { app_users } from "../user";
import { ORG_STATUS_VALUES, ORG_VISIBILITY_VALUES } from "@fluctux/constants";
import { isDeleted, timestamps } from "../helper";
import { relations, sql } from "drizzle-orm";
import { CATEGORY_LENGTH, IMAGE_URL_LENGTH, TAG_LENGTH } from "../constant";
import { org_members } from "./org_member.table";
import { org_teams } from "./org_team.table";

export const PG_ORG_VISIBILITY_E = pgEnum(
  "org_visibility_enum",
  ORG_VISIBILITY_VALUES
);
export const PG_ORG_STATUS_E = pgEnum("org_status_enum", ORG_STATUS_VALUES);

export const organizations = pgTable(
  "organizations",
  {
    id: t.uuid().primaryKey().unique().notNull().$defaultFn(uuidv4),
    created_by: t
      .uuid()
      .references(() => app_users.id, { onDelete: "cascade" })
      .notNull(),
    org_name: t.varchar({ length: 100 }).notNull(),
    org_desc: t.varchar({ length: 500 }),
    org_uri: t.varchar({ length: 100 }).notNull(),
    org_avatar: t.text(),
    org_cover_img: t.text(),
    category: t.varchar({ length: CATEGORY_LENGTH }),
    tags: t.varchar({ length: TAG_LENGTH }).array(),
    org_visibility: PG_ORG_VISIBILITY_E().default("PRIVATE").notNull(),
    org_status: PG_ORG_STATUS_E().notNull().default("NORMAL"),
    is_verified: t.boolean().notNull().default(false),
    is_hidden: t.boolean().notNull().default(true),
    is_deleted: isDeleted,
    ...timestamps,
  },
  (table) => [
    uniqueIndex("unq_org_uri_i").on(table.org_uri),
    check(
      "chk_org_av_c_len",
      sql`LENGTH(${table.org_avatar}) < ${sql.raw(`${IMAGE_URL_LENGTH}`)}`
    ),
    check(
      "chk_org_cvi_c_len",
      sql`LENGTH(${table.org_cover_img}) < ${sql.raw(`${IMAGE_URL_LENGTH}`)}`
    ),
  ]
);

export const orgRelations = relations(organizations, ({ many }) => ({
  org_members: many(org_members),
  org_teams: many(org_teams),
}));
