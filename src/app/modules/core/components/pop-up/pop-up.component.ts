import { Component, OnInit } from '@angular/core';
import { SocialProfilesService } from '../../../shared/social-media/services/social-profile/social-profile.service';
import { SocialProfile } from '../../../shared/social-media/interfaces/SocialProfile';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {
  socialProfiles: SocialProfile[];
  
  constructor(private socialProfilesService: SocialProfilesService) {
    this.socialProfiles = socialProfilesService.getSocialMediaProfiles();
  }

  ngOnInit() {
  }

}
