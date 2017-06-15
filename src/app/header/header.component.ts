import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	categories: Category[];

  constructor(private categoryService: CategoriesService) { }

  ngOnInit() {
  	this.categoryService.getCategories().subscribe(data => this.categories = data);
  }

}
