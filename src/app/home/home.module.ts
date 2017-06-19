import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { ProductsService } from '../products.service';
import { HomeComponent } from './home.component';
import { ListProductsComponent } from '../list-products/list-products.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule
  ],
  declarations: [
  	HomeComponent,
    ListProductsComponent
  ],
  providers: [ ProductsService ]
})
export class HomeModule { 
	
}
