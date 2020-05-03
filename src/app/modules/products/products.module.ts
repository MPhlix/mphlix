import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { SearchProductComponent } from './components/search-product/search-product.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListingComponent } from './components/products-listing/products-listing.component';
import { CoreModule } from '../core/core.module';
import { ProductsRepositoryModule } from '../shared/products-repository/products-repository.module';

const appRoutes: Routes = [
  { path: 'products', component: ProductsComponent }
];

@NgModule({
  declarations: [
    ProductsComponent,
    SearchProductComponent,
    ProductsListingComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(appRoutes),
    ProductsRepositoryModule
  ],
  bootstrap: [ProductsComponent]
})
export class ProductsModule { }
