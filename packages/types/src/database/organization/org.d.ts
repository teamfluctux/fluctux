import {
  ORG_STATUS_VALUES,
  ORG_VISIBILITY_VALUES,
  ORG_TEAM_VISILITY_VALUES,
  ORG_MEMBER_ROLE_VALUES,
  ORG_MEMBER_STATUS_VALUES,
  ORG_TEAM_STATUS_VALUES,
} from "@fluctux/constants";

export type OrgStatusType = (typeof ORG_STATUS_VALUES)[number];
export type OrgVisibilityType = (typeof ORG_VISIBILITY_VALUES)[number];
export type OrgTeamVisibilityType = (typeof ORG_TEAM_VISILITY_VALUES)[number];
export type OrgMemberRoleType = (typeof ORG_MEMBER_ROLE_VALUES)[number];
export type OrgMemberStatusType = (typeof ORG_MEMBER_STATUS_VALUES)[number];
export type OrgTeamStatusType = (typeof ORG_TEAM_STATUS_VALUES)[number];
