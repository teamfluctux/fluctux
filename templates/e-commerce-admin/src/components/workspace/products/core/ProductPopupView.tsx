"use client";
import { productStore } from "@/services/stores";
import { FxButton, FxCommandBox } from "@fluctux/ui";
import { X } from "lucide-react";
import { observer } from "mobx-react";
import React, { useEffect } from "react";

// window opening and closing animation -> classic macos
//  data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] 

export const ProductPopupView = observer(() => {
  useEffect(() => {
    // do data fetching operation
    alert(`id triggered ${productStore.productPopupView.id}`)
  }, [productStore.productPopupView.id]);
  return (
    <FxCommandBox
      open={productStore.productPopupView.open}
      className="max-w-[1100px] w-full max-h-[650px] h-full "
    >
      <div onClick={() => productStore.setProductPopupView({open: false})}>close</div>
    </FxCommandBox>
  );
});
