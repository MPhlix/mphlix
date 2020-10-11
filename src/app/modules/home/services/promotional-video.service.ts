import { Injectable } from '@angular/core';

//Custom Services
import { EntityRepopulationService } from '../../shared/products-repository/interfaces/entity-repopulation.service';
import { SocialMediaService } from '../../shared/social-media/services/social-media/social-media.service';

//Custom Models
import { SocialMediaWebsite } from '../../shared/social-media/interfaces/SocialMediaWebsite';
import { PromotionalVideo } from '../models/PromotionalVideo';

//Importing JSON data
import * as promotionalVideosJson from 'src/assets/json/promotional-videos.json';

@Injectable({
  providedIn: 'root'
})
export class PromotionalVideoService implements EntityRepopulationService {
  private websites: SocialMediaWebsite[];
  private videos: PromotionalVideo[];

  constructor(private socialMediaService: SocialMediaService) {
    this.videos = (promotionalVideosJson as any).default as PromotionalVideo[];
    this.websites = this.socialMediaService.getSocialMediaWebsites();
    this.videos.forEach(a => this.repopulate(a));
  }

  repopulate(video: PromotionalVideo): void {
    let website = this.websites.find(b => b.Id === video.SocialMediaWebsiteId);
    video.FullUrl = website.Url + website.EmbeddingUrl.replace(website.VideoIdPlaceholder, video.VideoId);
  }

  getActiveVideos() {
    return this.videos.filter(a=> a.CanShow);
  }
}
