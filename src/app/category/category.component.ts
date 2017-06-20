import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Category } from '../category';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
	private categoryId: number;

	categories: Category[];

  constructor(private route: ActivatedRoute, private categoryService: CategoriesService) {
  }

  ngOnInit() {
  	this.route.params.forEach((params:Params) => this.categoryId = params['id']);
  }

}
