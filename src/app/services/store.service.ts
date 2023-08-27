import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from '../model/store';
import { ApiConstants } from '../../assets/constants/api.constants'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private httpClient: HttpClient, private apiConst: ApiConstants) { }

  getStoreByName(store: string): Observable<Store>{
    return this.httpClient.get<Store>(this.apiConst.FIND_STORE_BY_NAME+store)
  }
}
