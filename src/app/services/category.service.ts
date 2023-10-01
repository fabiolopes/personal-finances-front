import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConstants } from '../../assets/constants/api.constants'
import { Observable } from 'rxjs';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient, private apiConst: ApiConstants) { }

  getCategoryByName(category: string): Observable<Category>{
    return this.httpClient.get<Category>(this.apiConst.ENDPOINT_CATEGORY_BY_NAME+category)
  }

  getCategoryByNameStartsWith(category: string): Observable<Category[]>{
    return this.httpClient.get<Category[]>(this.apiConst.ENDPOINT_CATEGORY_BY_NAME_STARTS_WITH+category)
  }
}
