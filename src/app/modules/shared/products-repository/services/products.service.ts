import { Injectable } from '@angular/core';
import { ProductsContext } from '../interfaces/ProductsContext';
import * as productsJson from 'src/assets/json/products-repository.json';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productsModel: ProductsContext;

  constructor() {
    this.productsModel = (productsJson as any).default as ProductsContext;
  }

  getAllProducts() {
    return this.productsModel;
  }

  getProductsByCategory(categoryName: string) {
    return this.productsModel.Products.filter(a=> a.Category.toLowerCase() === categoryName.toLowerCase());
  }

}
