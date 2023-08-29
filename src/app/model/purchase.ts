import { Store } from "./store";
import { PaymentMethod } from "./payment-method";
import { Product } from "./product";
import { Item } from "./item";

export interface Purchase {
    store: Store;
    items: Item[];
    paymentMethod: PaymentMethod; 
}