import { Injectable } from '@angular/core';

import { ProductsContainer } from '../interfaces/ProductsContainer';
import { Product } from '../interfaces/Product';
import { EntityRepopulationService } from '../interfaces/entity-repopulation.service';
import { Category } from '../interfaces/Category/Category';

import { CategoriesService } from './categories.service';
import { SkinAreaService } from './skin-area.service';

import * as productsJson from 'src/assets/json/products-container.json';

@Injectable({
  providedIn: 'root'
})
export class ProductsService implements EntityRepopulationService {

  private productsContainer: ProductsContainer;

  constructor(private categoryService: CategoriesService, private skinAreaService: SkinAreaService) {
    this.productsContainer = (productsJson as any).default as ProductsContainer;
    this.productsContainer.Products.forEach(a => this.repopulate(a));
  }

  repopulate(a: Product) {
    let category = this.categoryService.getById(a.CategoryId);
    a.Id = a.Id;
    a.Name = a.Name;
    a.Description = a.Description;
    a.Price = a.Price;
    a.ImagePath = this.productsContainer.ImageBasePath + this.categoryService.generatePathWithCategory(category) + a.ImagePath;
    a.Category = category;
    a.SkinAreas = a.SkinAreaIds.map(a => this.skinAreaService.getSkinAreaById(a));
    a.Tags = a.Tags;
  }

  getAllProducts() {
    return this.productsContainer.Products;
  }

}
