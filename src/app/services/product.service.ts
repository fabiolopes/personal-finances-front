import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConstants } from 'src/assets/constants/api.constants';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient, private apiConst: ApiConstants) { }

  getProductByName(product: string): Observable<Product>{
    return this.httpClient.get<Product>(this.apiConst.ENDPOINT_PRODUCT_BY_NAME+product)
  }
}
