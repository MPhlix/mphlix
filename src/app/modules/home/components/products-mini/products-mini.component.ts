import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/modules/shared/products-repository/services/products.service';
import { Product } from 'src/app/modules/shared/products-repository/interfaces/Product';

@Component({
  selector: 'products-mini',
  templateUrl: './products-mini.component.html',
  styleUrls: ['./products-mini.component.css']
})
export class ProductsMiniComponent implements OnInit {
  products: Product[];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.products = this.productsService.getAllProducts();
  }

}
