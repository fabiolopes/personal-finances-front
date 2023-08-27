import { Store } from "./store";
import { PaymentMethod } from "./payment-method";
import { Product } from "./product";

export interface Purchase {
    store: Store;
    preco: string;
    product: Product;
    qtd: number;
    valorPago: string;
    paymentMethod: PaymentMethod; 
}