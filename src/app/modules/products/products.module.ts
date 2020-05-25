import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { SearchProductComponent } from './components/search-product/search-product.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListingComponent } from './components/products-listing/products-listing.component';
import { CoreModule } from '../core/core.module';
import { ProductsRepositoryModule } from '../shared/products-repository/products-repository.module';
import { SearchProductService } from './services/search-product.service';
import { FormsModule } from '@angular/forms';

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
    FormsModule,
    RouterModule.forChild(appRoutes),
    ProductsRepositoryModule
  ],
  providers: [SearchProductService],
  bootstrap: [ProductsComponent]
})
export class ProductsModule { }
