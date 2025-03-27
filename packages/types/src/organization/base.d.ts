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

export type OrgStatusType = 
  | "NORMAL"
  | "SUSPENDED"
  | "RESTRICTED"


export type OrgVisibilityType =
  | "PUBLIC"
  | "PRIVATE"
  | "FRIENDS"
  | "CUSTOM"


export type OrgMemberRoleType =
  | "MANAGER"
  | "TEAM"
  | "FOLLOWER"

export type OrgResponseType =
  | { message: ApiResponseType; error?: undefined }
  | { error: ApiErrorType; message?: undefined };

export interface CreateOrganizationDataType {
  org_name?: string;
  org_slug?: string;
  org_visibility?: OrgVisibilityType;
}
