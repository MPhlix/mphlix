import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/modules/shared/products-repository/services/products.service';
import { ProductsContext } from 'src/app/modules/shared/products-repository/interfaces/ProductsContext';

@Component({
  selector: 'products-listing',
  templateUrl: './products-listing.component.html',
  styleUrls: ['./products-listing.component.css']
})
export class ProductsListingComponent implements OnInit {
  productsModel: ProductsContext;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsModel = this.productsService.getAllProducts();
  }

}
