export type TeamCategoryType =
  | "SOFTWARE"
  | "DESIGN"
  | "MARKETING"
  | "EDCUATION"
  | "BUSINESS"
  | "SRPOTS";

export interface TeamType {
  team_name: string;
  team_desc: string;
  team_avatar: string;
  team_category: string;
  isHidden: boolean;
  team_visibility: string;
}
