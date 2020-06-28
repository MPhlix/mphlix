import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/modules/shared/products-repository/services/products.service';
import { ProductMini } from 'src/app/modules/shared/products-repository/interfaces/Product/ProductMini';

@Component({
  selector: 'products-mini',
  templateUrl: './products-mini.component.html',
  styleUrls: ['./products-mini.component.css']
})
export class ProductsMiniComponent implements OnInit {
  products: ProductMini[];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.products = this.productsService.getAllMiniProducts();
  }

  getCategoryBreadcrumbs(categoryNames: string[]) {
    return categoryNames.join(' > ');
  }
}
