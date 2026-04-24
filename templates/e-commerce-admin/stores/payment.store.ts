import type { PaymentProviderType } from "@fluctux/types";
import { action, makeObservable, observable } from "mobx";

export type SelectedPaymentProvidersType = {
  parent_title: string;
  image: string;
  title: string;
  desc: string;
  value: PaymentProviderType;
};

class PaymentStore {
  selectedPaymentProviders: SelectedPaymentProvidersType[] = [];
  constructor() {
    makeObservable(this, {
      // -- States
      selectedPaymentProviders: observable,
      // -- Actions
      setSelectedPaymentProviders: action,
      clearStates: action,
    });
  }

  setSelectedPaymentProviders(data: SelectedPaymentProvidersType) {
    if (this.selectedPaymentProviders.find((p) => p.value == data.value)) {
      this.selectedPaymentProviders = this.selectedPaymentProviders.filter(
        (p) => p.value != data.value
      );
      return;
    }
    this.selectedPaymentProviders = [
      ...this.selectedPaymentProviders,
      { ...data },
    ];
  }

  clearStates() {
    this.selectedPaymentProviders = [];
  }
}

export const paymentStore = new PaymentStore();
