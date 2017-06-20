import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { CategoriesService } from './categories.service';
import { ProductsService } from './products.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ListProductsComponent } from './list-products/list-products.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryComponent,
    ListProductsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'category/:id', component: CategoryComponent}
    ])
  ],
  providers: [CategoriesService, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
