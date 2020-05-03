export interface Category {
    Id: number,
    Name: string,
    ImageFolderPath: string,
    ParentCategoryId: number,
    ParentCategory: Category
}