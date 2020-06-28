import { AccoladeType } from './AccoladeType';

export interface Accolade {
    Id: number,
    Name: string,
    AccoladeTypeId: number,
    AccoladeType: AccoladeType,
    ImagePath: string,
    IsActive: boolean
}