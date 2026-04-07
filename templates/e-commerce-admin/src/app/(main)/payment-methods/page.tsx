"use client";
import {
  paymentStore,
  productStore,
  workspaceHeaderStore,
} from "@/services/stores";
import React, { useEffect, useRef, useState } from "react";
import { CountrySelector, type CountryListType } from "./CountrySelector";
import { Button, ButtonGroup, FxButton, Kbd, Separator } from "@fluctux/ui";
import { CreditCard, PackageOpen, PlusCircle } from "lucide-react";
import { PaymentMethodCard } from "./PaymentMethodCard";
import {
  PaymentAddPopover,
  PaymentSetup,
  type PaymentSetupRefType,
} from "@/components/workspace/payment";
import { observer } from "mobx-react";
import {
  Empty,
  EmptyActions,
  EmptyDesc,
  EmptyTitle,
} from "@/components/EmptyItems";
import { PaymentMethodContext } from "@/context";

type MethodStatusCount = {
  active: number;
  inActive: number;
};

const PaymentMethodPage = () => {
  // -- The number of active payment methods and inactive payment methods
  const [methodStatusCount, setMethodStatusCount] =
    useState<MethodStatusCount>();

  const paymentSetupRef = useRef<PaymentSetupRefType>(null);

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
    <PaymentMethodContext.Provider value={{ paymentSetupRef }}>
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

      {paymentStore.selectedPaymentProviders.length > 0 ? (
        <div className="grid grid-cols-4 gap-3 mt-5 pb-10 w-full">
          {paymentStore.selectedPaymentProviders.map((item, i) => {
            return <PaymentMethodCard data={item} />;
          })}
        </div>
      ) : (
        <div className="w-full h-[calc(100vh-150px)] flex justify-center items-center">
          <Empty icon={CreditCard}>
            <EmptyTitle>No payment methods</EmptyTitle>
            <EmptyDesc>
              You haven't added any payment methods yet. Add a card to make
              faster checkouts and manage your billing in one place.
            </EmptyDesc>
            <EmptyActions>
              <FxButton
                onClick={() => setOpenPaymentProviderPopup(true)}
                size="xs"
              >
                Add payment method
              </FxButton>
            </EmptyActions>
          </Empty>
        </div>
      )}

      <PaymentAddPopover
        open={openPaymentProviderPopup}
        onClose={() => setOpenPaymentProviderPopup(false)}
      />

      <PaymentSetup ref={paymentSetupRef} />
    </PaymentMethodContext.Provider>
  );
};

export default observer(PaymentMethodPage);
