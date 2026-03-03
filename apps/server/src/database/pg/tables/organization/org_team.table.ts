import { organizations } from "./org.table";
import { pgTable, pgEnum } from "drizzle-orm/pg-core";
import * as t from "drizzle-orm/pg-core";
import { v4 as uuidv4 } from "uuid";
import { isDeleted, timestamps } from "../helper";
import { CATEGORY_LENGTH } from "../constant";
import {
  ORG_TEAM_STATUS_VALUES,
  ORG_TEAM_VISILITY_VALUES,
} from "@fluctux/constants";
import { relations } from "drizzle-orm";

export const PG_TEAM_STATUS_E = pgEnum("tm_status_enm", ORG_TEAM_STATUS_VALUES);
export const PG_TEAM_VISIBILITY = pgEnum(
  "org_team_visibility_enum",
  ORG_TEAM_VISILITY_VALUES
);

export const org_teams = pgTable("org_teams", {
  id: t.uuid().primaryKey().unique().notNull().$defaultFn(uuidv4),
  team_org: t
    .uuid("team_org")
    .references(() => organizations.id, { onDelete: "cascade" })
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

export const orgTeamRelations = relations(org_teams, ({ one }) => ({
  team_org: one(organizations, {
    fields: [org_teams.team_org],
    references: [organizations.id],
  }),
}));
