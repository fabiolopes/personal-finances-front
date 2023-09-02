import { Store } from "./store";
import { PaymentMethod } from "./payment-method";
import { Item } from "./item";

export interface Purchase {
    store: Store;
    items: Item[];
    paymentMethod: PaymentMethod; 
    total: number;
}