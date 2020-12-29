import { Injectable } from '@angular/core';
import * as socialMediaTypesJson from 'src/assets/json/social-media-types.json';
import { SocialMediaType } from '../../interfaces/SocialMediaType';

@Injectable({
  providedIn: 'root'
})
export class SocialMediaTypesService {
  socialMediaTypes: SocialMediaType[];

  constructor() {
    this.socialMediaTypes = (socialMediaTypesJson as any).default as SocialMediaType[];
  }

  getSocialMediaTypes() {
    return this.socialMediaTypes;
  }

  getById(id: number) {
    return this.socialMediaTypes.find(a => a.Id === id);
  }
}
