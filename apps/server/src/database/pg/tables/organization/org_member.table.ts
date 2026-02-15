import { pgTable, pgEnum } from "drizzle-orm/pg-core";
import * as t from "drizzle-orm/pg-core";
import { v4 as uuidv4 } from "uuid";
import { isDeleted, timestamps } from "../helper";
import { app_users } from "../user";
import { org_teams } from "./org_team.table";
import { organizations } from "./org.table";
import {
  ORG_MEMBER_ROLE_VALUES,
  ORG_MEMBER_STATUS_VALUES,
} from "@fluctux/constants";

export const PG_ORG_MEMB_ROLE_E = pgEnum(
  "org_member_role_enum",
  ORG_MEMBER_ROLE_VALUES
);
export const PG_ORG_MEMB_STATUS_E = pgEnum(
  "org_member_status_enum",
  ORG_MEMBER_STATUS_VALUES
);

export const org_members = pgTable("org_members", {
  memb_id: t.uuid().primaryKey().notNull().$defaultFn(uuidv4),
  user: t.uuid().references(() => app_users.user_id),
  org_team: t.uuid().references(() => org_teams.team_id),
  organization: t.uuid().references(() => organizations.org_id),
  memb_role: PG_ORG_MEMB_ROLE_E().notNull().default("FOLLOWER"),
  memb_access: t.varchar({ length: 200 }).array(),
  memb_status: PG_ORG_MEMB_STATUS_E().notNull().default("NOMRAL"),
  is_deleted: isDeleted,
  ...timestamps,
});
