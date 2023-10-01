import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiConstants } from '../../assets/constants/api.constants'
import { PaymentMethod } from '../model/payment-method';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodService {

  constructor(private httpClient: HttpClient, private apiConst: ApiConstants) { }

    getPaymentMethodByMethodName(method: string){
      return this.httpClient.get<PaymentMethod>(this.apiConst.ENDPOINT_PAYMENT_METHOD_BY_NAME+method)
    }

    getPaymentMethodByMethodNameStartsWith(method: string): Observable<PaymentMethod[]>{
      return this.httpClient.get<PaymentMethod[]>(this.apiConst.ENDPOINT_PAYMENT_METHOD_BY_NAME_STARTS_WITH+method)
    }
}
