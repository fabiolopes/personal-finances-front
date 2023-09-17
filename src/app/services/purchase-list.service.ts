import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConstants } from 'src/assets/constants/api.constants';
import { PurchaseListItem } from '../model/purchase-list-item';

@Injectable({
  providedIn: 'root'
})
export class PurchaseListService {

  constructor(private httpClient: HttpClient, private apiConst: ApiConstants) { }

  getPurchaseList(): Observable<PurchaseListItem[]>{
    return this.httpClient.get<PurchaseListItem[]>(this.apiConst.ENDPOINT_PURCHASE)
  }
}
