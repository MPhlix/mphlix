import { Injectable } from '@angular/core';
import { Campaign } from '../interfaces/Campaign/Campaign';
import * as campaignsJson from 'src/assets/json/campaigns.json';

@Injectable({
    providedIn: 'root'
})
export class CampaignsService {

    private campaigns: Campaign[];

    constructor() {
        this.campaigns = (campaignsJson as any).default as Campaign[];
    }

    getById(categoryId: number): Campaign {
        return this.campaigns.find(a => a.Id === categoryId);
    }
}