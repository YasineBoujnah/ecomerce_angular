import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../shared/models/product';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getallprouduct() {
    return this.http.get<Product[]>(environment.baseApi + '/products');
  }
  getproductbyid(id: number) {
    return this.http.get<Product>(environment.baseApi + '/products/' + id);
  }
  getallcategory() {
    return this.http.get<Product[]>(environment.baseApi + '/products/category');
  }
}
