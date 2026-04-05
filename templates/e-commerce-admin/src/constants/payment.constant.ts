export type AllPaymentMethodsProvidersType = {
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


export const ALL_PAYMENT_PROVIDERS: AllPaymentMethodsProvidersType = {
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