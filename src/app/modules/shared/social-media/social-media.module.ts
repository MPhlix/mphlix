import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialMediaService } from './services/social-media/social-media.service';
import { SocialMediaTypesService } from './services/social-media-type/social-media-type.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    SocialMediaService,
    SocialMediaTypesService
  ]
})
export class SocialMediaModule { }
