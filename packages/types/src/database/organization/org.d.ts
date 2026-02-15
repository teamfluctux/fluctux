import {
  ORG_STATUS_VALUES,
  ORG_VISIBILITY_VALUES,
  ORG_TEAM_VISILITY_VALUES
} from "@fluctux/constants";


export type OrgStatusType = (typeof ORG_STATUS_VALUES)[number]
export type OrgVisibilityType = (typeof ORG_VISIBILITY_VALUES)[number]
export type OrgTeamVisibilityType = (typeof ORG_TEAM_VISILITY_VALUES)[number]