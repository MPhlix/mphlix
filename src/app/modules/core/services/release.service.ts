import { Injectable } from '@angular/core';
import { Release } from '../interface/Release';
import * as release from 'src/assets/json/release.json';

@Injectable({
  providedIn: 'root'
})
export class ReleaseService {
  release: Release;

  constructor() {
    this.release = (release as any).default as Release;
  }

  getReleaseInformation() {
    return this.release.Version;
  }
}