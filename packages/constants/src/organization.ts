import {
  Globe,
  Settings2,
  Shield,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import { type OrgVisibilityType } from "@fluctux/types";

export enum OrgMemberStatusEnum {
  NORMAL = "NORMAL",
  RESTRICTED = "RESTRICTED",
  BLOCKED = "BLOCKED",
  PENDING = "PENDING",
  REJECTED = "REJECTED",
}

export enum OrgStatusEnum {
  NORMAL = "NORMAL",
  SUSPENDED = "SUSPENDED",
  RESTRICTED = "RESTRICTED",
}

export enum OrgPrivacyEnum {
  DEFAULT = "DEFAULT",
  LOCKED = "LOCKED",
}

export enum OrgVisibilityEnum {
  PUBLIC = "PUBLIC",
  PRIVATE = "PRIVATE",
  FRIENDS = "FRIENDS",
  CUSTOM = "CUSTOM",
}

export enum OrgMemberRoleEnum {
  MANAGER = "MANAGER",
  TEAM = "TEAM",
  FOLLOWER = "FOLLOWER",
}

export enum TeamCategoryEnum {
  SOFTWARE = "SOFTWARE",
  DESIGN = "DESIGN",
  MARKETING = "MARKETING",
  EDCUATION = "EDCUATION",
  BUSINESS = "BUSINESS",
  SRPOTS = "SRPOTS",
}

export interface OrgVisibilityOptionsType {
  label: string;
  desc: string;
  value: OrgVisibilityType;
  icon: LucideIcon;
}

export const ORG_VISIBILITY_OPTIONS: OrgVisibilityOptionsType[] = [
  {
    label: "Public",
    desc: "Visible to everyone on Fluctux",
    value: "PUBLIC",
    icon: Globe,
  },
  {
    label: "Private",
    desc: "Visible only to you and invited members",
    value: "PRIVATE",
    icon: Shield,
  },
  {
    label: "Friends",
    desc: "Visible to your friends",
    value: "FRIENDS",
    icon: UsersRound,
  },
  {
    label: "Custom",
    desc: "Visible only to specific users or organizations",
    value: "CUSTOM",
    icon: Settings2,
  },
];

export interface OrgPrivacyOptionsType {
  label: string;
  desc: string;
  icon: LucideIcon;
  value: OrgPrivacyEnum;
}

export const ORG_PRIVACY_OPTIONS: OrgPrivacyOptionsType[] = [
  {
    label: "Default",
    desc: "Allow anyone to join the organization.",
    icon: Globe,
    value: OrgPrivacyEnum.DEFAULT,
  },
  {
    label: "Locked",
    desc: "Require approval to join the organization.",
    icon: Shield,
    value: OrgPrivacyEnum.LOCKED,
  },
];
