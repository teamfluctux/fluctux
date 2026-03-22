export type StatusLevelType = "SAFE" | "WARNING" | "DESTRUCTIVE";

export type AgSelectCellDataType = {
  label: string;
  value: string;
  level?: StatusLevelType;
};


export type ProductManageDataType = {
  product_name?: string;
  product_image?: string;
  product_price?: number;
  categories?: AgCellPopoverDataType[];
  created_by?: string;
  status?: AgSelectCellDataType;
};

export type ProductsOverViewData = {
  label: string;
  value: number;
};