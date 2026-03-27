"use client";
import { productStore } from "@/services/stores";
import type { MenuDataType } from "@fluctux/types";
import {
  FxButton,
  FxCommandBox,
  ScrollArea,
  Tooltip,
  TooltipContent,
  Stepper,
  type StepperRef,
  TooltipTrigger,
} from "@fluctux/ui";
import {
  X,
  FileText,
  DollarSign,
  Tag,
  Layers,
  Images,
  Star,
  Truck,
  CheckCircle,
  type LucideIcon,
} from "lucide-react";
import { observer } from "mobx-react";
import React, { useEffect, useRef, useState } from "react";
import { GeneralEdit } from "./GeneralEdit";
import { PriceEdit } from "./PriceEdit";
import { TaxonomyEdit } from "./TaxonomyEdit";
import { VariationEdit } from "./VariationEdit";
import { ProductImagesEdit } from "./ProductImagesEdit";

// window opening and closing animation -> classic macos
//  data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]

type ProductCreationStepperType = {
  icon?: LucideIcon;
} & MenuDataType;
const PRODUCT_CREATION_MENU_OPTIONS: ProductCreationStepperType[] = [
  { label: "General", value: "general", icon: FileText },
  { label: "Price", value: "price", icon: DollarSign },
  { label: "Taxonomy", value: "taxonomy", icon: Tag },
  { label: "Variations", value: "variations", icon: Layers },
  { label: "Images", value: "images", icon: Images },
  { label: "Rating & Reviews", value: "rating-n-reviews", icon: Star },
  { label: "Shipping & returns", value: "shipping_returns", icon: Truck },
  { label: "Finish", value: "finish", icon: CheckCircle },
];

export const ProductPopupView = observer(() => {
  const [activeMenu, setActiveMenu] = useState<string>("general");

  useEffect(() => {
    // -- Clear product id and popup boolean on component unmount
    return () => {
      productStore.clearProductPopupView();
    };
  }, []);
  useEffect(() => {
    // -- If popup open and id is available fetch created product as admin
    if (
      productStore.productPopupView?.open &&
      productStore.productPopupView?.id
    ) {
      // do data fetching operation
      alert(`id triggered ${productStore.productPopupView?.id}`);
    }
  }, [productStore.productPopupView?.open]);

  return (
    <FxCommandBox
      modal={false}
      open={true}
      // to enable macos window open close animation pass classname here
      className="max-w-[1100px] w-full max-h-[650px] h-full "
    >
      <div className="w-full h-[45px]  border-b border-border-color_1 px-2 pl-3.5 flex justify-between items-center">
        <div className="flex justify-start items-center gap-5 h-full">
          {PRODUCT_CREATION_MENU_OPTIONS.map((item) => {
            const Icon = item.icon;
            return (
              <button
                data-state={activeMenu == item.value && "active"}
                onClick={() => setActiveMenu(item.value)}
                key={item.value}
                className={`text-workspace_2 outline-0! font-medium text-text-color_4 flex justify-center items-center gap-1 h-full data-[state=active]:border-b-2 data-[state=active]:border-primary-color data-[state=active]:text-text-color_1`}
              >
                {Icon && <Icon size={15} />}
                {item.label}
              </button>
            );
          })}
        </div>
        <FxButton
          variant="ghost_zinc_2"
          size="rounded_sm"
          icon={X}
          onClick={() => productStore.setProductPopupView({ open: false })}
        ></FxButton>
      </div>

      <div className="w-full h-[calc(100%-45px)] flex justify-between items-center">
        <ScrollArea className="w-full h-full">
          <>
            {activeMenu == "general" && <GeneralEdit />}
            {activeMenu == "price" && <PriceEdit />}
            {activeMenu == "taxonomy" && <TaxonomyEdit />}
            {activeMenu == "variations" && <VariationEdit />}
            {activeMenu == "images" && <ProductImagesEdit />}
          </>
        </ScrollArea>
        <div className="w-[450px] border-l border-border-color_1 h-full">
          <h3 className="p-5 text-workspace_1 font-medium">Preview</h3>
        </div>
      </div>
    </FxCommandBox>
  );
});
