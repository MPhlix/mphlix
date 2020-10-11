import { Injectable } from '@angular/core';
import * as socialMediaContainerJson from 'src/assets/json/social-media-container.json';
import { SocialMediaContainer } from '../../interfaces/SocialMediaContainer';

@Injectable({
  providedIn: 'root'
})
export class SocialMediaService {
  socialMediaContainer: SocialMediaContainer;

  constructor() {
    this.socialMediaContainer = (socialMediaContainerJson as any).default as SocialMediaContainer;
  }

  getSocialMediaWebsites() {
    return this.socialMediaContainer.Websites;
  }
}
