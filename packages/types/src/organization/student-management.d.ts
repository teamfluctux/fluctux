export type StudentType = "university" | "college" | "basic";

export type AreaConfig = {
  _id?: string;
  fillOpacity?: number;
  stroke?: string;
};

export type AreaDataType = {
  key: string;
  config: AreaConfig;
};
