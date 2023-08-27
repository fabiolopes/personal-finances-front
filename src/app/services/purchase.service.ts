import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConstants } from 'src/assets/constants/api.constants';
import { Observable } from 'rxjs';
import { Purchase } from '../model/purchase';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(private httpClient: HttpClient, private apiConst: ApiConstants) { }

  public newPurchase(purchase: Purchase){
    this.httpClient.post<string>(this.apiConst.ENDPOINT_PURCHASE, purchase).subscribe(success => {
      console.log('dd')
    })
  }
}
