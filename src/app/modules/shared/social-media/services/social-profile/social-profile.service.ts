import { Injectable } from '@angular/core';
import * as socialMediaContainerJson from 'src/assets/json/social-media-container.json';
import * as socialProfilesJson from 'src/assets/json/social-profiles.json';
import { SocialProfile } from '../../interfaces/SocialProfile';
import { SocialMediaContainer } from '../../interfaces/SocialMediaContainer';
import { EntityRepopulation } from '../../../common-interfaces/interfaces/entity-repopulation.interface';

@Injectable({
    providedIn: 'root'
})
export class SocialProfilesService implements EntityRepopulation {
    socialMediaContainer: SocialMediaContainer;
    private socialProfiles: SocialProfile[];

    constructor() {
        this.socialMediaContainer = (socialMediaContainerJson as any).default as SocialMediaContainer;
        this.socialProfiles = (socialProfilesJson as any).default as SocialProfile[];
        this.socialProfiles.forEach(a => this.repopulate(a));
    }

    repopulate(profile: SocialProfile): void {
        let matchingSocialMedia = this.socialMediaContainer.Websites.find(b => b.Id === profile.WebsiteId);
        if (matchingSocialMedia) {
            profile.IconClass = matchingSocialMedia.IconClass;
            if (matchingSocialMedia.Name === 'whatsapp') {
                profile.Url = matchingSocialMedia.Url
                    + matchingSocialMedia.EmbeddingUrl.replace(matchingSocialMedia.CountryCodePlaceholder, "91").replace(matchingSocialMedia.PhoneNumberPlaceholder, profile.UserId);
            }
            else
                profile.Url = matchingSocialMedia.Url + profile.UserId;
            profile.SvgIconId = matchingSocialMedia.SvgIconId;
            profile.HasIconImage = !!matchingSocialMedia.IconImageName;
            profile.IconImageName = this.socialMediaContainer.ImagePath + matchingSocialMedia.IconImageName;
        }
    }

    getSocialMediaProfiles(): SocialProfile[] {
        return this.socialProfiles;
    }

}