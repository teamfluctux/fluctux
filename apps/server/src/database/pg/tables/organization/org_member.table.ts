import { pgTable, pgEnum } from "drizzle-orm/pg-core";
import * as t from "drizzle-orm/pg-core";
import { v4 as uuidv4 } from "uuid";
import { isDeleted, timestamps } from "../helper";
import { app_users } from "../user";
import { organizations } from "./org.table";
import {
  ORG_MEMBER_ROLE_VALUES,
  ORG_MEMBER_STATUS_VALUES,
} from "@fluctux/constants";
import { relations } from "drizzle-orm";

export const PG_ORG_MEMB_ROLE_E = pgEnum(
  "org_member_role_enum",
  ORG_MEMBER_ROLE_VALUES
);
export const PG_ORG_MEMB_STATUS_E = pgEnum(
  "org_member_status_enum",
  ORG_MEMBER_STATUS_VALUES
);

export const org_members = pgTable("org_members", {
  id: t.uuid().primaryKey().notNull().$defaultFn(uuidv4),
  app_user: t
    .uuid()
    .references(() => app_users.id, { onDelete: "cascade" })
    .notNull(),
  organization: t
    .uuid()
    .references(() => organizations.id, { onDelete: "cascade" })
    .notNull(),
  memb_role: PG_ORG_MEMB_ROLE_E().notNull().default("FOLLOWER"),
  memb_status: PG_ORG_MEMB_STATUS_E().notNull().default("NOMRAL"),
  is_deleted: isDeleted,
  ...timestamps,
});


export const orgMemberRelations = relations(org_members, ({one}) => ({
  app_user: one(app_users, {
    fields: [org_members.app_user],
    references: [app_users.id]
  }),
  organization: one(organizations, {
    fields: [org_members.organization],
    references: [organizations.id]
  })
}))