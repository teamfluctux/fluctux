import type { ProductManageDataType } from "@/types";
import { action, makeObservable, observable } from "mobx";

type ProductPopupViewType = { open?: boolean, id?: string }

class ProductStore {
    isProductOptionsOpen: boolean = false
    productPopupView: ProductPopupViewType | null = null
    createProduct: ProductManageDataType | null = null
    constructor() {
        makeObservable(this, {
            isProductOptionsOpen: observable,
            setIsProductOptionsOpen: action,
            productPopupView: observable,
            setProductPopupView: action,
            clearProductPopupView: action,
            createProduct: observable,
            setCreateProduct: action,
            clearCreateProduct: action
        })
    }

    setIsProductOptionsOpen(value?: boolean) {
        this.isProductOptionsOpen = value || !this.isProductOptionsOpen
    }
    setProductPopupView(data: Partial<ProductPopupViewType>) {
        // set value seperately so that mobx dont trigger state unnecessarily
        this.productPopupView = data
    }

    clearProductPopupView() {
        this.productPopupView = null
    }

    setCreateProduct(data: Partial<ProductManageDataType>) {
        Object.entries(data).map(([objectKey, value]) => {
            (this.createProduct as any)[objectKey] = value
        })
    }

    clearCreateProduct() {
        this.createProduct = null
    }


}


export const productStore = new ProductStore()