"use client";
import { FxButton, FxPopover, type PopoverMenuDataType } from "@fluctux/ui";
import { Ellipsis } from "lucide-react";
import Image from "next/image";
import React from "react";
import { DollarSign, Info, FileText, PowerOff } from "lucide-react";
import type { SelectedPaymentProvidersType } from "@/services/stores";
import { SupportedCardListItem } from "@/components/workspace/payment/SupportedCardListItem";
import { usePaymentMethodContext } from "@/context";

const PaymentEllipsisMenu: PopoverMenuDataType = {
  settings: {
    data: [
      { label: "See pricing & fees", icon: DollarSign },
      { label: "Learn more", icon: Info },
      { label: "See terms of service", icon: FileText },
    ],
  },
  status: {
    data: [{ label: "Disable", status: "DANGER", icon: PowerOff }],
  },
};

export const PaymentMethodCard = ({
  data,
}: {
  data: SelectedPaymentProvidersType;
}) => {
  const { paymentSetupRef } = usePaymentMethodContext();
  return (
    <>
      <div className="w-full h-fit border border-border-color_1 rounded-lg bg-background-color_925C overflow-hidden">
        <div className="h-[150px] border-b border-border-color_1 w-full bg-background-color_900C rounded-b-lg p-1">
          <div className="rounded-sm overflow-hidden w-full h-full ">
            <Image
              src={data.image ?? ""}
              width={500}
              height={500}
              className=" object-contain w-full h-full"
              alt={data.title}
            />
          </div>
        </div>
        <div className="w-full h-fit pt-2 pb-3 px-3 relative">
          <div className="leading-4.5 mt-1">
            <h5 className="text-workspace_1 font-medium one-line-ellipsis">
              {data.title}
            </h5>
            <p className="text-workspace_3 text-text-color_2 one-line-ellipsis">
              {data.desc}
            </p>
          </div>
          <div className="w-full flex justify-between items-center gap-2 mt-3 ">
            <div className="flex justify-start items-center gap-1 w-full">
              {Array.from({ length: 3 }).map((_, i) => {
                return <SupportedCardListItem key={i} />;
              })}
            </div>
            <div className="flex justify-center shrink-0 w-fit items-center gap-2">
              <FxButton
                size="xs"
                onClick={() => {
                  paymentSetupRef.current?.handleOpenChange();
                  paymentSetupRef.current?.handleSetPaymentProvider(data.value);
                }}
              >
                Setup
              </FxButton>

              <FxPopover
                align="end"
                side="top"
                InteractChild={
                  <FxButton
                    size="square_xs"
                    variant="secondary"
                    className="rounded-sm"
                    icon={Ellipsis}
                  />
                }
                items={PaymentEllipsisMenu}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
