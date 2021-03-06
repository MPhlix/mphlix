import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/modules/shared/products-repository/services/products.service';
import { Product } from 'src/app/modules/shared/products-repository/interfaces/Product/Product';
import { Category } from 'src/app/modules/shared/products-repository/interfaces/Category/Category';
import { SearchProductService } from '../../services/search-product.service';
import { CategoriesService } from 'src/app/modules/shared/products-repository/services/categories.service';

@Component({
  selector: 'products-listing',
  templateUrl: './products-listing.component.html',
  styleUrls: ['./products-listing.component.css']
})
export class ProductsListingComponent implements OnInit {
  products: Product[];
  private searchTerms: string;
  filteredProducts: Product[];

  constructor(private productsService: ProductsService, private searchProductService: SearchProductService, private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.products = this.productsService.getAllProducts();
    this.searchProductService.currentSearchTerms.subscribe(searchTerms => {
      this.filteredProducts = this.getNewFilteredProducts(searchTerms);
    });
  }
  
  getNewFilteredProducts(searchTerms: string) {
    let pagedProducts: Product[];

    if (searchTerms) {
      let individualSearchTerms = searchTerms.toLowerCase().split(' ');

      if (this.products && individualSearchTerms) {

        pagedProducts = this.products.filter(product => individualSearchTerms.filter(searchTerm => {
          let skinAreaNames = product.SkinAreas.map(skinArea => skinArea.Name.toLowerCase());
          let tags = product.Tags.map(tag => tag.toLowerCase());
          return product.Name.toLowerCase().includes(searchTerm) || product.Description.toLowerCase().includes(searchTerm)
            || skinAreaNames.filter(skinAreaName => skinAreaName.includes(searchTerm)).length > 0
            || tags.filter(tag => tag.includes(searchTerm)).length > 0
            || this.isCategoryMatching(product.Category, searchTerm);
        }).length > 0);
      }
      else
        pagedProducts = this.products;
    }
    else
      pagedProducts = this.products;

    return pagedProducts;
  }

  private isCategoryMatching(category: Category, searchTerm: string) {
    return category.Name.toLowerCase().includes(searchTerm)
      || (category.ParentCategory && this.isCategoryMatching(category.ParentCategory, searchTerm));
  }

  getCategoryBreadcrumbs(category: Category) {
    let categoryNames = this.categoriesService.generateParentCategoryNamesWithHigherOrder(category, 3);
    return categoryNames.join(' > ');
  }

}
