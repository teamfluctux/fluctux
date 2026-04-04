"use client";
import { Checkbox, FxButton, FxCommandBox, FxInput, ScrollArea } from "@fluctux/ui";
import { Circle, CircleCheck, X } from "lucide-react";
import Image from "next/image";
import React from "react";

type AllPaymentMethodsProvidersType = {
  [key: string]: {
    title: string;
    providers: {
      image: string;
      title: string;
      desc: string;
      value: string;
    }[];
  };
};

const ALL_PAYMENT_PROVIDERS: AllPaymentMethodsProvidersType = {
  card: {
    title: "Card Payments",
    providers: [
      {
        title: "Visa",
        value: "visa",
        image: "",
        desc: "Pay with Visa credit or debit card",
      },
      {
        title: "Mastercard",
        value: "mastercard",
        image: "",
        desc: "Pay with Mastercard credit or debit card",
      },
      {
        title: "American Express",
        value: "american-express",
        image: "",
        desc: "Pay with American Express card",
      },
      {
        title: "Discover",
        value: "discover",
        image: "",
        desc: "Pay with Discover card",
      },
      {
        title: "Diners Club",
        value: "diners-club",
        image: "",
        desc: "Pay with Diners Club card",
      },
      { title: "JCB", value: "jcb", image: "", desc: "Pay with JCB card" },
      {
        title: "UnionPay",
        value: "unionpay",
        image: "",
        desc: "Pay with UnionPay card",
      },
    ],
  },
  digital_wallet: {
    title: "Digital Wallets",
    providers: [
      {
        title: "PayPal",
        value: "paypal",
        image: "",
        desc: "Pay via your PayPal balance or linked card",
      },
      {
        title: "Apple Pay",
        value: "apple-pay",
        image: "",
        desc: "Pay using Face ID or Touch ID on Apple devices",
      },
      {
        title: "Google Pay",
        value: "google-pay",
        image: "",
        desc: "Pay using your saved Google account cards",
      },
      {
        title: "Cash App",
        value: "cash-app",
        image: "",
        desc: "Pay using your Cash App balance",
      },
      {
        title: "Venmo",
        value: "venmo",
        image: "",
        desc: "Pay using your Venmo balance",
      },
      {
        title: "Revolut",
        value: "revolut",
        image: "",
        desc: "Pay via your Revolut wallet",
      },
      {
        title: "Wise",
        value: "wise",
        image: "",
        desc: "Pay via your Wise multi-currency account",
      },
    ],
  },
  mobile_banking: {
    title: "Mobile Banking",
    providers: [
      {
        title: "bKash",
        value: "bkash",
        image: "",
        desc: "Pay via bKash mobile banking",
      },
      {
        title: "Nagad",
        value: "nagad",
        image: "",
        desc: "Pay via Nagad mobile banking",
      },
      {
        title: "Rocket",
        value: "rocket",
        image: "",
        desc: "Pay via Rocket mobile banking",
      },
      {
        title: "SureCash",
        value: "surecash",
        image: "",
        desc: "Pay via SureCash mobile banking",
      },
    ],
  },
  buy_now_pay_later: {
    title: "Buy Now Pay Later",
    providers: [
      {
        title: "Klarna",
        value: "klarna",
        image: "",
        desc: "Split your purchase into interest-free installments",
      },
      {
        title: "Afterpay",
        value: "afterpay",
        image: "",
        desc: "Pay in 4 interest-free installments",
      },
    ],
  },
  payment_gateway: {
    title: "Payment Gateways",
    providers: [
      {
        title: "Stripe",
        value: "stripe",
        image: "",
        desc: "Pay securely via Stripe",
      },
    ],
  },
  crypto: {
    title: "Cryptocurrency",
    providers: [
      {
        title: "Bitcoin",
        value: "bitcoin",
        image: "",
        desc: "Pay with Bitcoin",
      },
      {
        title: "Ethereum",
        value: "ethereum",
        image: "",
        desc: "Pay with Ethereum",
      },
    ],
  },
  asian_wallets: {
    title: "Asian Wallets",
    providers: [
      { title: "Alipay", value: "alipay", image: "", desc: "Pay via Alipay" },
      {
        title: "WeChat Pay",
        value: "wechat-pay",
        image: "",
        desc: "Pay via WeChat Pay",
      },
    ],
  },
};

export const PaymentAddPopover = () => {
  return (
    <FxCommandBox
      modal={false}
      open={true}
      // to enable macos window open close animation pass classname here
      className="max-w-[800px] w-full max-h-[550px] h-full"
    >
        <div className="w-full flex justify-between items-center  h-[50px] border-b border-border-color_1 px-3">
            <div>

            </div>
            <div className="flex justify-end items-center gap-3">

<FxInput placeholder="Search payment provider..." variant="blackPrimary" size="sm"/>
<FxButton variant="ghost_zinc_2" size="rounded_sm" icon={X}/>


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
                            return (
                              <div className="w-[40px] h-[25px] border border-border-color_1 rounded-sm bg-background-color_900C"></div>
                            );
                          })}
                        </div>
                        <div className="shrink-0 w-fit">
                          <input
                            type="checkbox"
                            className="hidden peer"
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
};
