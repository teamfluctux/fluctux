import type { app_users, org_members, org_teams, organizations, user_addresses, user_contacts, user_profiles } from "@/database/pg";
import type { InferInsertModel, InferSelectModel } from "drizzle-orm";

// -- App User
// Select types
export type AppUserType = InferSelectModel<typeof app_users>
export type UserProfileType = InferSelectModel<typeof user_profiles>
export type UserContactType = InferSelectModel<typeof user_contacts>
export type UserAddressType = InferSelectModel<typeof user_addresses>
// Insert types
export type InsertAppUserType = InferInsertModel<typeof app_users>
export type InsertUserProfileType = InferInsertModel<typeof user_profiles>
export type InsertUserContactType = InferInsertModel<typeof user_contacts>
export type InsertUserAddressType = InferInsertModel<typeof user_addresses>


// -- Organization
// Select types
export type OrgType = InferSelectModel<typeof organizations>
export type OrgMemberType = InferSelectModel<typeof org_members>
export type OrgTeamType = InferSelectModel<typeof org_teams>
// Insert types
export type InsertOrgType = InferInsertModel<typeof organizations>
export type InsertOrgMemberType = InferInsertModel<typeof org_members>
export type InsertOrgTeamType = InferInsertModel<typeof org_teams>