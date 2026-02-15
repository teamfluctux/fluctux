import { pgTable, pgEnum, uniqueIndex } from "drizzle-orm/pg-core";
import * as t from "drizzle-orm/pg-core"
import { v4 as uuidv4 } from "uuid";
import { app_user } from "../user";
import { ORG_STATUS_VALUES, ORG_TEAM_VISILITY_VALUES, ORG_VISIBILITY_VALUES } from "@fluctux/constants";
import { isDeleted, timestamps } from "../helper";

export const PG_ORG_VISIBILITY_E = pgEnum("org_visibility_enum", ORG_VISIBILITY_VALUES)
export const PG_ORG_STATUS_E = pgEnum("org_status_enum", ORG_STATUS_VALUES)
export const PG_TEAM_VISIBILITY = pgEnum("org_team_visibility_enum", ORG_TEAM_VISILITY_VALUES)

export const organization = pgTable("organization", {
    org_id: t.uuid().primaryKey().unique().notNull().$defaultFn(uuidv4),
    admin: t.uuid().references(() => app_user.user_id).notNull(),
    org_avatar: t.varchar({length: 500}),
    org_cover_img: t.varchar({length: 500}),
    org_name: t.varchar({ length: 200 }).notNull(),
    org_uri: t.varchar({ length: 300 }).notNull(),
    org_desc: t.varchar({ length: 1000 }),
    org_visibility: PG_ORG_VISIBILITY_E().default("PRIVATE").notNull(),
    is_hidden: t.boolean().notNull().default(true),
    tags: t.varchar({ length: 100 }).array(),
    category: t.varchar({ length: 200 }),
    country: t.varchar({ length: 200 }),
    org_status: PG_ORG_STATUS_E().notNull().default("NORMAL"),
    is_verified: t.boolean().notNull().default(false),
    is_deleted: isDeleted,
    ...timestamps
}, (table) => [
        uniqueIndex("org_uri_unique_index").on(table.org_uri)
])

export const org_teams = pgTable("org_teams", {
    team_id: t.uuid().primaryKey().unique().notNull().$defaultFn(uuidv4),
    team_org: t.uuid().references(() => organization.org_id).notNull(),
    team_name: t.varchar({length: 200}).notNull(),
    team_desc: t.varchar({length: 500}),
    team_avatar: t.varchar({length: 500}),
    team_cover_img: t.varchar({length: 500}),
    team_category: t.varchar({length: 200}),
    is_hidden: t.boolean(),
    team_visibility: PG_TEAM_VISIBILITY().notNull().default("PUBLIC"),
    is_deleted: isDeleted,
    ...timestamps
})

