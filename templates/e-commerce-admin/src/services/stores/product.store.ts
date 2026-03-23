import { makeObservable, observable } from "mobx";

class ProductStore {
    
    constructor() {
        makeObservable(this, {
           
        })
    }
}


export const productStore = new ProductStore()