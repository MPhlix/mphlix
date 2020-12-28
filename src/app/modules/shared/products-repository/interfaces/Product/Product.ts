import { Category } from '../Category/Category';
import { SkinArea } from '../SkinArea';
import { Campaign } from '../Campaign/Campaign';
import { ProductUnitType } from './ProductUnitType';

export interface Product {
    Id: number,
    Name: string,
    Description: string,
    Price: number,
    ImagePath: string,
    CategoryId: number,
    SkinAreaIds: number[],
    Tags: string[],
    Category: Category,
    SkinAreas: SkinArea[],
    CampaignId: number,
    Campaign: Campaign,
    ProductUnitTypeId: number
    ProductUnitType: ProductUnitType
}