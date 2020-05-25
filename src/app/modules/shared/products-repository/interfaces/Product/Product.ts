import { Category } from '../Category/Category';
import { SkinArea } from '../SkinArea';

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
    SkinAreas: SkinArea[]
}