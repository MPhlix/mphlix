import { Injectable } from '@angular/core';
import { Category } from '../interfaces/Category/Category';
import * as categoriesJson from 'src/assets/json/categories.json';
import { EntityRepopulation } from '../../common-interfaces/interfaces/entity-repopulation.interface';

@Injectable({
    providedIn: 'root'
})
export class CategoriesService implements EntityRepopulation {

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

    generateParentCategoryNamesWithHigherOrder(category: Category, order: number): string[] {
        let copyCategory = category;
        let higherOrderParentCategoryNames: string[] = [];
        let parentCategories: Category[] = [];

        parentCategories.push(category);

        if (order <= 0)
            return higherOrderParentCategoryNames;

        while (copyCategory.ParentCategory) {
            parentCategories.push(copyCategory.ParentCategory);
            copyCategory = copyCategory.ParentCategory;
        }

        if (parentCategories.length > 0)
            for (let i = parentCategories.length - 1; i >= 0 && order > 0; i--) {
                higherOrderParentCategoryNames.push(parentCategories[i].Name);
                order--;
            }
        else
            higherOrderParentCategoryNames = [copyCategory.Name];

        return higherOrderParentCategoryNames;
    }
}
