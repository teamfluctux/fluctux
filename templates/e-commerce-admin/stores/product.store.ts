import type { ProductManageDataType } from "@/types";
import { action, makeObservable, observable } from "mobx";

type ProductPopupViewType = { open?: boolean; id?: string };
type ProductMoreOptionsMenuType = {
  isProductOptionsOpen: boolean
  isScrapProductsPopupOpen: boolean
}

class ProductStore {
  productPopupView: ProductPopupViewType | null = null;
  // -- Keep it {}, as Object.assign won't work without {}. Don't give it null
  createProduct: ProductManageDataType | {} = {};
  productMoreOptionsMenu: ProductMoreOptionsMenuType = {
    isProductOptionsOpen: false,
    isScrapProductsPopupOpen: false
  }
  constructor() {
    makeObservable(this, {
      // -- States
      productPopupView: observable,
      createProduct: observable,
      productMoreOptionsMenu: observable,
      // -- Actions
      setProductPopupView: action,
      setCreateProduct: action,
      clearCreateProduct: action,
      clearAllStates: action,
      setProductMoreOptionsMenu: action
    });
  }


  setProductPopupView(data: Partial<ProductPopupViewType>) {
    // set value seperately so that mobx dont trigger state unnecessarily
    this.productPopupView = data;
  }


  setCreateProduct(data: Partial<ProductManageDataType>) {
    // -- trigger Update each property separately 
    Object.assign(this.createProduct, data)

  }

  clearCreateProduct() {
    this.createProduct = {};
  }

  clearAllStates() {
    this.productPopupView = null;
    this.createProduct = {};
  }

  setProductMoreOptionsMenu(data: Partial<ProductMoreOptionsMenuType>) {
    Object.assign(this.productMoreOptionsMenu, data)
  }
}

export const productStore = new ProductStore();

