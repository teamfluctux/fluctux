import { ApiErrorType, ApiResponseType } from "../http";
import { Document } from "mongoose";
import { UserType } from "../user";

export interface OrgType extends Document {
  org_thumbnail: string;
  org_name: string;
  org_description: string;
  org_slug: string;
  org_visibility: OrgVisibilityType;
  admin: UserType;
  tags: string[];
  category: string;
  country: string;
  city: string;
  status: OrgStatusType;
  isVerified: boolean;
}

export enum OrgStatusType {
  NORMAL = "NORMAL",
  SUSPENDED = "SUSPENDED",
  RESTRICTED = "RESTRICTED",
}

export enum OrgVisibilityType {
  PUBLIC = "PUBLIC",
  PRIVATE = "PRIVATE",
  FRIENDS = "FRIENDS",
  CUSTOM = "CUSTOM",
}

export enum OrgMemberRoleType {
  MANAGER = "MANAGER",
  TEAM = "TEAM",
  FOLLOWER = "FOLLOWER",
}

export type OrgResponseType =
  | { message: ApiResponseType; error?: undefined }
  | { error: ApiErrorType; message?: undefined };

export interface CreateOrganizationDataType {
  org_name?: string;
  org_slug?: string;
  org_visibility?: OrgVisibilityType;
}
