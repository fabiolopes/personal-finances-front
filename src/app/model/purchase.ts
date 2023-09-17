import { Store } from "./store";
import { PaymentMethod } from "./payment-method";
import { Item } from "./item";
import { Category } from "./category";

export interface Purchase {
    store: Store;
    items: Item[];
    paymentMethod: PaymentMethod; 
    category: Category,
    total: number;
}