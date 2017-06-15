import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

	products: Product[];

  constructor(private product: ProductsService) { }

  ngOnInit() {
  	this.product.getProducts().subscribe(data => this.products = data);
  }

}
