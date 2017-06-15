import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CategoriesService } from './categories.service';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductsService } from './products.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CategoriesService, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
