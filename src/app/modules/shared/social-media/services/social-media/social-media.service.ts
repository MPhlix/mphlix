import { Injectable } from '@angular/core';
import * as socialMediaContainerJson from 'src/assets/json/social-media-container.json';
import { SocialMediaContainer } from '../../interfaces/SocialMediaContainer';
import { SocialMediaWebsite } from '../../interfaces/SocialMediaWebsite';
import { ObjectHelper } from '../../../common-utils/helper-services/object-helper';
import { SocialMediaTypesService } from '../social-media-type/social-media-type.service';
import { EntityRepopulation } from '../../../common-interfaces/interfaces/entity-repopulation.interface';

@Injectable({
  providedIn: 'root'
})
export class SocialMediaService implements EntityRepopulation {
  socialMediaContainer: SocialMediaContainer;

  constructor(private objectHelper: ObjectHelper, private socialMediaTypeService: SocialMediaTypesService) {
    this.socialMediaContainer = (socialMediaContainerJson as any).default as SocialMediaContainer;
    this.socialMediaContainer.Websites.forEach(a=> this.repopulate(a));
  }

  repopulate(website: SocialMediaWebsite) {
    website.SocialMediaTypes = [];
    for (let j = 0; j < website.SocialMediaTypeIds.length; j++) {
      let mediaTypeId = website.SocialMediaTypeIds[j];
      if (!this.objectHelper.isEmptyOrZero(mediaTypeId)) {
        website.SocialMediaTypes.push(this.socialMediaTypeService.getById(mediaTypeId));
      }
    }
  };

  getSocialMediaWebsites() {
    return this.socialMediaContainer.Websites;
  }
}
