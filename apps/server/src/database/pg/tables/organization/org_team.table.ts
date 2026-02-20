import { organizations, PG_TEAM_VISIBILITY } from "./org.table";
import { pgTable, pgEnum } from "drizzle-orm/pg-core";
import * as t from "drizzle-orm/pg-core";
import { v4 as uuidv4 } from "uuid";
import { isDeleted, timestamps } from "../helper";
import { CATEGORY_LENGTH } from "../constant";
import { ORG_TEAM_STATUS_VALUES } from "@fluctux/constants";

export const PG_TEAM_STATUS_E = pgEnum("tm_status_enm", ORG_TEAM_STATUS_VALUES);

export const org_teams = pgTable("org_teams", {
  _id: t.uuid().primaryKey().unique().notNull().$defaultFn(uuidv4),
  team_org: t
    .uuid("team_org")
    .references(() => organizations._id, {onDelete: "cascade"})
    .notNull(),
  team_name: t.varchar({ length: 200 }).notNull(),
  team_desc: t.varchar({ length: 500 }),
  team_avatar: t.text(),
  team_cover_img: t.text(),
  team_category: t.varchar({ length: CATEGORY_LENGTH }),
  team_visibility: PG_TEAM_VISIBILITY().notNull().default("PUBLIC"),
  team_status: PG_TEAM_STATUS_E().notNull().default("PUBLISHED"),
  is_hidden: t.boolean().notNull().default(false),
  is_deleted: isDeleted,
  ...timestamps,
});
