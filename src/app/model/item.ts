import { Product } from "./product";

export interface Item {
    price: string;
    product: Product;
    qtd: number;
    valuePaid: number;
}
