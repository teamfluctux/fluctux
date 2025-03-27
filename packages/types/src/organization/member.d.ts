import { Document } from "mongoose";
import { OrgMemberRoleType, OrgType } from "./base";
import { RequestStatusType, UserType } from "../user";

export interface OrgMemberType extends Document {
  org: OrgType;
  user: UserType;
  role: OrgMemberRoleType;
  status: OrgMemberStatusType;
}

export interface CreateNewTeamDataType {
  team_name: string;
  team_desc: string;
  team_avatar: string;
  team_category: string; //TODO: it should be enum
  isHidden: boolean;
  team_visibility: string; //TODO: it should be enum
}

export type OrgMemberStatusType =
  | "NORMAL"
  | "RESTRICTED"
  | "BLOCKED"
  | "PENDING"
  | "REJECTED";

export interface OrgMemberRequestType extends Document {
  requested_to: OrgType;
  sender_id: UserType;
  receiver_id: UserType;
  status: RequestStatusType;
  requested_role: OrgMemberRoleType;
}
