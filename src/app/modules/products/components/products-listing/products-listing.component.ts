import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/modules/shared/products-repository/services/products.service';
import { ProductsContainer } from 'src/app/modules/shared/products-repository/interfaces/ProductsContainer';

@Component({
  selector: 'products-listing',
  templateUrl: './products-listing.component.html',
  styleUrls: ['./products-listing.component.css']
})
export class ProductsListingComponent implements OnInit {
  productsContainer: ProductsContainer;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsContainer = this.productsService.getAllProducts();
  }

}
