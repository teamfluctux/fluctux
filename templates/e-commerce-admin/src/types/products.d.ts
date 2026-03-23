export type StatusLevelType = "SAFE" | "WARNING" | "DESTRUCTIVE";

export type AgSelectCellDataType = {
  label: string;
  value: string;
  level?: StatusLevelType;
};

// export type ShippingMethod = {
//   name: string
//   value: string
//   image: string
//   base_url: string
//   client_id: string
//   client_secret: string
//   apis: string[]
// }
// export type ShippingZoneType = {
//   name: string
//   value: string
//   zone: {
//     id?: string
//     name?: string

//   }
// }

type ProductManageDataAttributesType = {
  label: string;
  value: string;
  type: "COLOR" | "IMAGE" | "RADIO" | "BUTTON"
}

type IdentifierType = "GTIN" | "UPC" | "EAN" | "ISBN";

type ProductIdentifiers = {
  type: IdentifierType;
  value: string;
};


export type ProductManageDataType = {
  id: string
  name: string;
  slug: string;
  desc?: string
  identifiers?: ProductIdentifiers[]
  sku: string
  images?: {
    label?: string;
    src: string
    isThumbnail?: boolean
  }[];
  regular_price?: number;
  sale_price?: number
  discount?: number
  categories?: AgCellPopoverDataType[];
  created_by: string;
  status?: AgSelectCellDataType;
  stock_status: "IN_STOCK" | "OUT_OF_STOCK" | "ON_BACK_ORDER"
  weigth?: number
  dimensions?: {
    length?: number
    width?: number
    height?: number
  }
  created_at: string
  updated_at?: string
  tags?: AgCellPopoverDataType[]
  attributes?: ProductManageDataAttributesType[]
  variations?: {
    id?: string;
    data: Pick<ProductManageDataType, "sku" | "weigth" | "dimensions" | "identifiers" | "regular_price" | "sale_price" | "discount" | "stock_status" | "desc" | "images">
    attribute?: ProductManageDataAttributesType
  }[]
};

export type ProductsOverViewData = {
  label: string;
  value: number;
};