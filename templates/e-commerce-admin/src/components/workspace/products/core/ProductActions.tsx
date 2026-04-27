"use client";
import {
  PRODUCT_PAGE_MENU_OPTIONS,
  type ProductMenuOptionsValuesType,
} from "@/constants";
import { FxButton, FxPopover } from "@fluctux/ui";

import { CirclePlus, Ellipsis, PlusIcon } from "lucide-react";
import { useEffect } from "react";

import { useUrlQueryParams } from "@fluctux/hooks";

import { productStore } from "stores";
import type { ProductMoreOptionsQueryParams } from "@/types";
import { ProductOptions } from "../action-menu-comps/ProductOptions";

export const ProductActions = () => {
  // -- Handle query params
  const { handlePushQueryParam, getQueryParam } =
    useUrlQueryParams<ProductMoreOptionsQueryParams>();

  // -- Get query params
  const getOptionsParam = getQueryParam(
    "options"
  ) as ProductMenuOptionsValuesType;

  //   -- UI click events
  const handleProductMenuItemClick = (
    value: ProductMenuOptionsValuesType,
    isAsQueryParam?: boolean
  ) => {
    if (isAsQueryParam) {
      handlePushQueryParam("options", value);
    }
    if(value === "scrape-products") {
      productStore.setProductMoreOptionsMenu({isScrapProductsPopupOpen: true})
    }
  };

  //   -- Effect UI on query changes
  useEffect(() => {
    if (getOptionsParam == "product-options") {
      productStore.setProductMoreOptionsMenu({ isProductOptionsOpen: true });
    }
  }, [getOptionsParam]);

  return (
    <>
      <div className="flex justify-center items-center w-fit shrink-0 gap-3">
        <FxButton icon={CirclePlus} variant="primary" size="sm">
          Add new
        </FxButton>
        <FxPopover<typeof PRODUCT_PAGE_MENU_OPTIONS>
          align="end"
          onItemClick={handleProductMenuItemClick}
          InteractChild={
            <FxButton
              icon={Ellipsis}
              iconSize={16}
              variant="secondary"
              size="rounded_sm"
            />
          }
          items={PRODUCT_PAGE_MENU_OPTIONS}
        />
      </div>
      <ProductOptions />
    </>
  );
};
