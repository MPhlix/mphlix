import { Injectable } from '@angular/core';
import { ProductUnitType } from '../interfaces/Product/ProductUnitType';
import * as productUnitTypesJson from 'src/assets/json/product-unit-type.json';

@Injectable({
    providedIn: 'root'
})
export class ProductUnitTypeService {

    private productUnitTypes: ProductUnitType[];

    constructor() {
        this.productUnitTypes = (productUnitTypesJson as any).default as ProductUnitType[];
    }

    getById(id: number): ProductUnitType {
        return this.productUnitTypes.find(a => a.Id === id);
    }
}
