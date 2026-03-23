"use client";
import {
  PRODUCT_PAGE_MENU_OPTIONS,
  type ProductMenuOptionsValuesType,
} from "@/constants";
import { Button, ButtonGroup, FxButton, FxPopover } from "@fluctux/ui";
import { Sheet, SheetContent } from "./sheet";
import { Ellipsis, PlusIcon } from "lucide-react";
import { useEffect, useState } from "react";
import type { MenuDataType } from "@fluctux/types";
import { useUrlQueryParams } from "@fluctux/hooks";

// -- Query params type
type ProductQueryParams = "options" | "opt-menu";

// -- Constants
const PRODUCT_OPTIONS_HEADER_MENUS: MenuDataType[] = [
  { label: "Attributes", value: "attributes" },
  { label: "Variations", value: "variations" },
];

export const ProductActions = () => {
  // -- UI states
  const [isProductOptionsOpen, setIsProductOptionsOpen] =
    useState<boolean>(false);

  // -- Handle query params
  const { handlePushQueryParam, removeMultipleQueryParams, getQueryParam } =
    useUrlQueryParams<ProductQueryParams>();

  // -- Get query params
  const getOptionsParam = getQueryParam(
    "options"
  ) as ProductMenuOptionsValuesType;
  const getOptionsMenu = getQueryParam("opt-menu");

  //   -- UI click events
  const handleProductMenuItemClick = (
    value: string,
    isAsQueryParam?: boolean
  ) => {
    if (isAsQueryParam) {
      handlePushQueryParam("options", value);
    }
  };

  //   -- Effect UI on query changes
  useEffect(() => {
    if (getOptionsParam == "product-options") {
      setIsProductOptionsOpen(true);
    }
  }, [getOptionsParam]);

  return (
    <>
      <div className="flex justify-center items-center w-fit shrink-0 gap-3">
        <FxButton icon={PlusIcon} variant="primary" size="sm">
          Add Products
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
      <Sheet
        open={isProductOptionsOpen}
        onOpenChange={(value) =>
          setIsProductOptionsOpen(() => {
            if (!value) {
              removeMultipleQueryParams("opt-menu", "options");
            }
            return value;
          })
        }
      >
        <SheetContent className="max-w-[1200px] w-full p-2">
          <div className="w-full h-full bg-background-color_900C border border-border-color_1 rounded-xl">
            <div className="w-full h-[50px] border-b border-border-color_1">
              <ButtonGroup className="*:text-workspace_2">
                {PRODUCT_OPTIONS_HEADER_MENUS.map((item, i) => {
                  return (
                    <Button
                      variant={"secondary"}
                      className={`text-text-color_2 bg-background-color_850C hover:bg-background-color_800C  ${getOptionsMenu === item.value && "text-surface-fg-2 bg-surface-bg-active hover:bg-surface-bg-active"}`}
                      onClick={() => {
                        handlePushQueryParam("opt-menu", item.value);
                      }}
                      key={i}
                    >
                      {item.label}
                    </Button>
                  );
                })}
              </ButtonGroup>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};
