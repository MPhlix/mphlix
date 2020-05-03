import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/modules/shared/products-repository/services/products.service';
import { ProductsContainer } from 'src/app/modules/shared/products-repository/interfaces/ProductsContainer';

@Component({
  selector: 'products-mini',
  templateUrl: './products-mini.component.html',
  styleUrls: ['./products-mini.component.css']
})
export class ProductsMiniComponent implements OnInit {
  productsContainer: ProductsContainer;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsContainer = this.productsService.getAllProducts();
  }

}
