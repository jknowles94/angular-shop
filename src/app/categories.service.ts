import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Category } from './category';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoriesService {

  constructor(private http:Http) { }

  getCategories() {
  	return this.http.get('assets/categories.json')
  	.map(response => <Category[]>response.json().categoryData);
  }

}
