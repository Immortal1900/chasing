import { Injectable } from '@angular/core';
import {Product} from './product.model';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  selectedproduct: Product;
  products: Product[];
  readonly baseURL='http://localhost:3000/products';
    constructor(private http: HttpClient) { }
    postEmployee(pr: Product){
      console.log("POST PRODUCT");
      return this.http.post(this.baseURL,pr);
    }
    getallEmployee(pr: Product){
      return this.http.get(this.baseURL);
    }
}
