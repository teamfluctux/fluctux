import type { PaymentProviderType } from "@fluctux/types";

export type AllPaymentMethodsProvidersType = {
  [key: string]: {
    title: string;
    providers: {
      image: string;
      title: string;
      desc: string;
      value: PaymentProviderType;
    }[];
  };
};

export const ALL_PAYMENT_PROVIDERS: AllPaymentMethodsProvidersType = {
  digital_wallet: {
    title: "Digital Wallets",
    providers: [
      {
        title: "PayPal",
        value: "paypal", // Matched value
        image: "",
        desc: "Pay via your PayPal balance or linked card",
      },
    ],
  },
  mobile_banking: {
    title: "Mobile Banking",
    providers: [
      {
        title: "bKash",
        value: "bkash", // Matched value
        image: "",
        desc: "Pay via bKash mobile banking",
      },
      {
        title: "Nagad",
        value: "nagad", // Matched value
        image: "",
        desc: "Pay via Nagad mobile banking",
      },
    ],
  },
  payment_gateway: {
    title: "Payment Gateways",
    providers: [
      {
        title: "SSLCommerz",
        value: "sslcommerz", // Matched value
        image: "",
        desc: "Pay securely via SSLCommerz gateway",
      },
    ],
  },
};
