"use client";
import {
  paymentStore,
  productStore,
  workspaceHeaderStore,
} from "@/services/stores";
import React, { useEffect, useState } from "react";
import { CountrySelector, type CountryListType } from "./CountrySelector";
import { Button, ButtonGroup, FxButton, Kbd, Separator } from "@fluctux/ui";
import { PlusCircle } from "lucide-react";
import { PaymentMethodCard } from "./PaymentMethodCard";
import { PaymentAddPopover } from "@/components/workspace/payment";
import { observer } from "mobx-react";

type MethodStatusCount = {
  active: number;
  inActive: number;
};

const PaymentMethodPage = () => {
  // -- The number of active payment methods and inactive payment methods
  const [methodStatusCount, setMethodStatusCount] =
    useState<MethodStatusCount>();

  // -- Handling open/close state of the Payment Providers Popup View
  const [openPaymentProviderPopup, setOpenPaymentProviderPopup] =
    useState<boolean>(false);

  // -- Country saving loading animation
  const [countryLoading, setCountryLoading] = useState<boolean>(false);
  // -- On country change event
  const handleCountryUpdate = (data: CountryListType) => {
    if (data.code) {
      setCountryLoading(true);
      setTimeout(() => {
        setCountryLoading(false);
      }, 2000);
    }
  };

  useEffect(() => {
    workspaceHeaderStore.setMetaData({
      title: "Payment Methods",
      desc: "View, edit, and organize your entire product catalog",
    });

    setMethodStatusCount({
      active: 4,
      inActive: 5,
    });

    return () => {
      workspaceHeaderStore.clearMetaData();
      paymentStore.clearStates();
    };
  }, []);

  return (
    <>
      <div className="w-full  h-[50px] mt-5 flex justify-between items-center ">
        <div className="flex justify-start items-center gap-3 ">
          <ButtonGroup>
            <Button
              variant="outline"
              size={"default"}
              className="text-text-color_4"
            >
              Active <Kbd>{Number(methodStatusCount?.active ?? 0)}</Kbd>
            </Button>
            <Button
              variant="outline"
              size={"default"}
              className="text-text-color_4"
            >
              Inactive <Kbd>{Number(methodStatusCount?.inActive ?? 0)}</Kbd>
            </Button>
          </ButtonGroup>
        </div>

        <div className="flex justify-end items-center gap-3">
          <CountrySelector
            onCountrySelect={handleCountryUpdate}
            loading={countryLoading}
          />
          <FxButton
            size="sm"
            icon={PlusCircle}
            onClick={() => setOpenPaymentProviderPopup(true)}
          >
            Add Payment Method
          </FxButton>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3 mt-5 pb-10">
        {paymentStore.selectedPaymentProviders.map((item, i) => {
          return <PaymentMethodCard data={item} />;
        })}
      </div>
      <PaymentAddPopover
        open={openPaymentProviderPopup}
        onClose={() => setOpenPaymentProviderPopup(false)}
      />
    </>
  );
};

export default observer(PaymentMethodPage);
