import { Injectable } from '@angular/core';
import { SkinArea } from '../interfaces/SkinArea';

import * as skinAreasJson from 'src/assets/json/skin-areas.json';

@Injectable({
  providedIn: 'root'
})
export class SkinAreaService {
  private skinAreas: SkinArea[];

  constructor() {
    this.skinAreas = (skinAreasJson as any).default as SkinArea[];
  }

  getSkinAreaById(skinAreaId: number) {
    return this.skinAreas.find(a => a.Id === skinAreaId);
  }
}
