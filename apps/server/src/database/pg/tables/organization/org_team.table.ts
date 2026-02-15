import { organizations, PG_TEAM_VISIBILITY } from "./org.table";
import { pgTable } from "drizzle-orm/pg-core";
import * as t from "drizzle-orm/pg-core";
import { v4 as uuidv4 } from "uuid";
import { isDeleted, timestamps } from "../helper";

export const org_teams = pgTable("org_teams", {
  team_id: t.uuid().primaryKey().unique().notNull().$defaultFn(uuidv4),
  team_org: t
    .uuid("team_org")
    .references(() => organizations.org_id)
    .notNull(),
  team_name: t.varchar({ length: 200 }).notNull(),
  team_desc: t.varchar({ length: 500 }),
  team_avatar: t.varchar({ length: 500 }),
  team_cover_img: t.varchar({ length: 500 }),
  team_category: t.varchar({ length: 200 }),
  is_hidden: t.boolean(),
  team_visibility: PG_TEAM_VISIBILITY().notNull().default("PUBLIC"),
  is_deleted: isDeleted,
  ...timestamps,
});
