import {Injectable} from '@angular/core';

@Injectable()
export class ApiConstants {

    public HOST = "http://localhost:8080"

    public ENDPOINT_STORE = this.HOST + "/store"
    public FIND_STORE_BY_NAME = this.ENDPOINT_STORE + "/findByName/"
    public FIND_STORE_BY_NAME_STARTS_WITH = this.ENDPOINT_STORE + "/findByNameStartsWith/"
    public ENDPOINT_PAYMENT_METHOD = this.HOST + "/paymentMethod/"
    public ENDPOINT_PAYMENT_METHOD_BY_NAME = this.ENDPOINT_PAYMENT_METHOD + "findByName/"
    public ENDPOINT_PAYMENT_METHOD_BY_NAME_STARTS_WITH = this.ENDPOINT_PAYMENT_METHOD + "findByNameStartsWith/"
    public ENDPOINT_PRODUCT = this.HOST + "/product/"
    public ENDPOINT_PRODUCT_BY_NAME = this.ENDPOINT_PRODUCT + "findByName/"
    public ENDPOINT_PRODUCT_BY_NAME_STARTS_WITH = this.ENDPOINT_PRODUCT + "findByNameStartsWith/"
    public ENDPOINT_PURCHASE = this.HOST + "/purchase"
    public ENDPOINT_CATEGORY = this.HOST + "/category"
    public ENDPOINT_CATEGORY_BY_NAME = this.ENDPOINT_CATEGORY + "/findByName/"
    public ENDPOINT_CATEGORY_BY_NAME_STARTS_WITH = this.ENDPOINT_CATEGORY + "/findByNameStartsWith/"

}