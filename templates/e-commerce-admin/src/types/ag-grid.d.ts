export type StatusLevelType = "SAFE" | "WARNING" | "DESTRUCTIVE";
export type AgSelectCellDataType = {
  label: string;
  value: string;
  level?: StatusLevelType;
};

export type CellBadgeDataType = {
  type: "text" | "color";
  label?: string;
  values: string;
};
