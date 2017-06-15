import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Product } from './product';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductsService {

  constructor(private http: Http) { }

  getProducts() {
  	return this.http.get('assets/products.json')
  		.map(response => <Product[]>response.json().productData);
  }
}
