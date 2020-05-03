import { Injectable } from '@angular/core';
import { Category } from '../interfaces/Category/Category';
import * as categoriesJson from 'src/assets/json/categories.json';
import { EntityRepopulationService } from '../interfaces/entity-repopulation.service';

@Injectable({
    providedIn: 'root'
})
export class CategoriesService implements EntityRepopulationService {

    private categories: Category[];

    constructor() {
        this.categories = (categoriesJson as any).default as Category[];
        this.categories.forEach(a => this.repopulate(a));
    }

    repopulate(a: Category): void {
        a.Id = a.Id;
        a.Name = a.Name;
        a.ImageFolderPath = a.ImageFolderPath;
        a.ParentCategory = this.categories.find(b => b.Id === a.ParentCategoryId);
    }

    generatePathWithCategory(category: Category): string {
      if (category.ParentCategory)
        return this.generatePathWithCategory(category.ParentCategory) + category.ImageFolderPath;
      return category.ImageFolderPath;
    }

    getById(categoryId: number): Category {
        return this.categories.find(a => a.Id === categoryId);
    }

}
