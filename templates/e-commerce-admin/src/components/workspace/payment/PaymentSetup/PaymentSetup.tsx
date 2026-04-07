"use client";
import type { PaymentProviderType } from "@fluctux/types";
import { FxButton, FxCommandBox, ScrollArea } from "@fluctux/ui";
import { X } from "lucide-react";
import dynamic from "next/dynamic";
import React, { forwardRef, useImperativeHandle, useState } from "react";

const SSlCommerzSetupDynamic = dynamic(
  () => import("./SSlCommerzSetup").then((mod) => mod.SSlCommerzSetup),
  {
    loading: () => <p>Loading...</p>,
  }
);

export type PaymentSetupRefType = {
  handleOpenChange: (value?: boolean) => void;
  handleSetPaymentProvider: (value: PaymentProviderType) => void;
};

export const PaymentSetup = forwardRef<PaymentSetupRefType>(({}, ref) => {
  const [open, setOpen] = useState<boolean>(false);
  const [paymentProvider, setPaymentProvider] =
    useState<PaymentProviderType | null>(null);

  const handleOpenChange = (value?: boolean) => {
    setOpen(value ?? !open);
  };

  const handleSetPaymentProvider = (value: PaymentProviderType) => {
    setPaymentProvider(value);
  };

  useImperativeHandle(ref, () => {
    return {
      handleOpenChange: handleOpenChange,
      handleSetPaymentProvider: handleSetPaymentProvider,
    };
  });

  return (
    <FxCommandBox
      overlayBackground
      modal={false}
      open={open}
      className="max-w-[450px] w-full max-h-[550px] h-full"
    >
      <ScrollArea className="w-full h-full">
        <div className="flex justify-between items-center gap-5 sticky top-0 left-0 py-3 border-border-color_1 px-5 border-b bg-background-color_925C ">
          <h2 className="text-workspace_1 font-medium one-line-ellipsis text-text-color_1  ">
            {paymentProvider == "sslcommerz" && "SSLCommerz Setup"}
          </h2>
          <div className="flex justify-center gap-2 items-center">
            <FxButton
              onClick={() => handleOpenChange()}
              variant="secondary"
              size="xs"
            >
              Cancel
            </FxButton>
            <FxButton onClick={() => handleOpenChange()} size="xs">
              Save
            </FxButton>
          </div>
        </div>
        <div className="p-5 pt-4">
          {paymentProvider == "sslcommerz" && <SSlCommerzSetupDynamic />}
        </div>
      </ScrollArea>
    </FxCommandBox>
  );
});
