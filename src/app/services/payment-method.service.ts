import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiConstants } from '../../assets/constants/api.constants'
import { Observable } from 'rxjs';
import { PaymentMethod } from '../model/payment-method';

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodService {

  constructor(private httpClient: HttpClient, private apiConst: ApiConstants) { }

  getPaymentMethodByMethodName(method: string): Observable<PaymentMethod>{
    return this.httpClient.get<PaymentMethod>(this.apiConst.ENDPOINT_PAYMENT_METHOD_BY_NAME+method)
  }
}
