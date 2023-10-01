import { Category } from "./category"
import { PaymentMethod } from "./payment-method"
import { Product } from "./product"
import { Store } from "./store"

export interface AutocompletePurchase {
    categoryOtions: Category[]
    storeOtions: Store[]
    paymentMethodOtions: PaymentMethod[]
    productOtions: Product[]
    selectedCategory: Category
    selectedStore: Store
    selectedPaymentMethod: PaymentMethod
    selectedProduct: Product
}
