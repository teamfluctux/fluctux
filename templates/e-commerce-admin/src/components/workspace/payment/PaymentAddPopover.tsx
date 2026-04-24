"use client";
import { ALL_PAYMENT_PROVIDERS } from "@/constants";
import { paymentStore } from "stores";
import {
  Badge,
  FxButton,
  FxCommandBox,
  FxInput,
  ScrollArea,
} from "@fluctux/ui";
import { Circle, CircleCheck } from "lucide-react";
import { observer } from "mobx-react";
import Image from "next/image";
import React from "react";
import { SupportedCardListItem } from "./SupportedCardListItem";

type PaymentAddPopoverPropsType = {
  open: boolean;
  onClose: () => void;
  onSave?: () => void;
};

export const PaymentAddPopover = observer(
  ({ open = false, onClose, onSave }: PaymentAddPopoverPropsType) => {
    return (
      <FxCommandBox
        overlayBackground
        modal={false}
        open={open}
        className="max-w-[800px] w-full max-h-[550px] h-full"
      >
        <div className="w-full flex justify-between items-center  h-[50px] border-b border-border-color_1 px-3">
          <div>
            {paymentStore.selectedPaymentProviders.length > 0 && (
              <div className="text-workspace_15 font-medium flex justify-center items-center gap-1">
                <Badge>{paymentStore.selectedPaymentProviders.length}</Badge>

                <span>Selected</span>
              </div>
            )}
          </div>
          <div className="flex justify-end items-center gap-2">
            {/* -- Later add search feature */}
            {/* <FxInput
              placeholder="Search payment provider..."
              variant="blackPrimary"
              size="sm"
            /> */}

            <FxButton onClick={() => onClose?.()} size="xs" variant="secondary">
              Cancel
            </FxButton>
            <FxButton size="xs" onClick={() => onSave?.()}>
              Save
            </FxButton>
          </div>
        </div>
        <ScrollArea className="p-5 pt-4 w-full h-[calc(100%-50px)] ">
          {Object.entries(ALL_PAYMENT_PROVIDERS).map(([key, value], i) => {
            return (
              <div className={`${i > 0 && "mt-10"}`} key={`${key}-${i}`}>
                <p className="text-workspace_2 font-medium text-text-color_2 pb-3">
                  {value.title}
                </p>
                <div className="grid grid-cols-2 gap-3 ">
                  {value.providers.map((item, j) => {
                    return (
                      <label
                        key={`${item.value}-${j}`}
                        className="w-full h-[120px] rounded-lg group border border-border-color_1 hover:border-surface-border-active transition-colors"
                      >
                        <div className="w-full h-[calc(100%-40px)] p-1 pb-0">
                          <div className="w-full h-full rounded-sm p-1 bg-background-color_900C overflow-hidden flex justify-start items-start">
                            <div className="w-[100px] h-full shrink-0  rounded-sm overflow-hidden">
                              <Image
                                src={""}
                                width={500}
                                height={500}
                                className="object-cover object-center w-full h-full"
                                alt={item.title}
                              />
                            </div>
                            <div className="py-1 px-3">
                              <h5 className="text-workspace_2 font-medium text-text-color_1 one-line-ellipsis group-hover:text-surface-fg">
                                {item.title}
                              </h5>
                              <p className="text-workspace_3 text-text-color_3 leading-4 two-line-ellipsis">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="w-full h-[40px] flex justify-between items-center px-2">
                          <div className="flex justify-start items-center gap-1 w-full">
                            {Array.from({ length: 3 }).map((_, i) => {
                              return <SupportedCardListItem key={i} />;
                            })}
                          </div>
                          <div className="shrink-0 w-fit">
                            <input
                              onChange={() => {
                                paymentStore.setSelectedPaymentProviders({
                                  parent_title: value.title,
                                  ...item,
                                });
                              }}
                              type="checkbox"
                              className="hidden peer"
                              checked={paymentStore.selectedPaymentProviders.some(
                                (sp) => sp.value == item.value
                              )}
                              value={item.value}
                              name="payment-providers"
                            />
                            <Circle
                              size={20}
                              className="hidden  peer-checked:hidden! group-hover:block text-text-color_3"
                            />
                            <CircleCheck
                              size={20}
                              className="hidden peer-checked:block fill-primary-color ring-3 ring-surface-bg-active rounded-full text-background-color_925C"
                            />
                          </div>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </ScrollArea>
      </FxCommandBox>
    );
  }
);
