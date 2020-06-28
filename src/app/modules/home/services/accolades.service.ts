import { Injectable } from '@angular/core';

//Custom Services
import { EntityRepopulationService } from '../../shared/products-repository/interfaces/entity-repopulation.service';

//Custom Models
import { Accolade } from '../models/Accolade';
import { AccoladeType } from '../models/AccoladeType';
import { AccoladeContainer } from '../models/AccoladeContainer';

//Importing JSON data
import * as accoladeTypesJson from 'src/assets/json/accolade-types.json';
import * as accoladeContainerJson from 'src/assets/json/accolades.json';

@Injectable({
  providedIn: 'root'
})
export class AccoladesService implements EntityRepopulationService {
  accoladeContainer: AccoladeContainer;
  private accoladesTypes: AccoladeType[];

  constructor() {
    this.accoladeContainer = (accoladeContainerJson as any).default as AccoladeContainer;
    this.accoladesTypes = (accoladeTypesJson as any).default as AccoladeType[];
    this.accoladeContainer.Accolades.forEach(a => this.repopulate(a));
  }

  repopulate(accolade: Accolade): void {
    accolade.AccoladeType = this.accoladesTypes.find(b => b.Id === accolade.AccoladeTypeId);
    accolade.ImagePath = this.accoladeContainer.ImageBasePath + accolade.AccoladeType.ImagePath + accolade.ImagePath;
  }

  getActiveAccolades() {
    return this.accoladeContainer.Accolades.filter(a=> a.IsActive);
  }
}
