import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { SearchProductComponent } from './components/search-product/search-product.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'products', component: ProductsComponent }
];

@NgModule({
  declarations: [
    ProductsComponent,
    SearchProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
  ],
  bootstrap: [ProductsComponent]
})
export class ProductsModule { }
