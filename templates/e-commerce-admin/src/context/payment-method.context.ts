import type { PaymentSetupRefType } from "@/components/workspace/payment"
import { createContext, useContext, type RefObject } from "react"

type PaymentMethodContextType = {
    paymentSetupRef: RefObject<PaymentSetupRefType | null> 
}

export const PaymentMethodContext = createContext<PaymentMethodContextType | null>(null)

export const usePaymentMethodContext = () => {
    const context = useContext(PaymentMethodContext)
    if (!context) throw new Error("usePaymentMethodContext must be used within PaymentMethodContext.Provider")
    return context
}


