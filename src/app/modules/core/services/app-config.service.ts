import { Injectable } from '@angular/core';
import { AppConfig } from '../interface/AppConfig';
import * as appConfigJson from 'src/assets/json/app-config.json';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  release: AppConfig;

  constructor() {
    this.release = (appConfigJson as any).default as AppConfig;
  }

  getReleaseInformation() {
    return this.release.Version;
  }
}