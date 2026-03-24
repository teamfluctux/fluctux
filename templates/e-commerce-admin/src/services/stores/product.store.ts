import { action, makeObservable, observable } from "mobx";

class ProductStore {
    isProductOptionsOpen: boolean = false
    constructor() {
        makeObservable(this, {
            isProductOptionsOpen: observable,
            setIsProductOptionsOpen: action
        })
    }

    setIsProductOptionsOpen(value: boolean) {
        this.isProductOptionsOpen = value
    }
}


export const productStore = new ProductStore()