import { action, makeObservable, observable } from "mobx";

type ProductPopupViewType = { open: boolean, id: string }

class ProductStore {
    isProductOptionsOpen: boolean = false
    productPopupView: ProductPopupViewType = { open: false, id: "" }
    constructor() {
        makeObservable(this, {
            isProductOptionsOpen: observable,
            setIsProductOptionsOpen: action,
            productPopupView: observable,
            setProductPopupView: action
        })
    }

    setIsProductOptionsOpen(value?: boolean) {
        this.isProductOptionsOpen = value || !this.isProductOptionsOpen
    }
    setProductPopupView(data: Partial<ProductPopupViewType>) {
        // set value seperately so that mobx dont trigger state unnecessarily
        Object.entries(data).map(([Key, value]) => {
            (this.productPopupView as any)[Key] = value
        })
    }
}


export const productStore = new ProductStore()