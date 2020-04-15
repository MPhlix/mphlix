import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { Member } from 'src/app/interface/Member';
import { MembersService } from 'src/app/services/members.service';

@Component({
  selector: 'mphlix-team',
  templateUrl: './mphlix-team.component.html',
  styleUrls: ['./mphlix-team.component.css']
})
export class MphlixTeamComponent implements OnInit {

  socialMediaUrl = [
    { name: 'instagram', url: 'https://www.instagram.com/' },
    { name: 'twitter', url: 'https://twitter.com/' },
    { name: 'github', url: 'https://www.github.com/' },
    { name: 'facebook', url: 'https://www.facebook.com/' }
  ];

  members: Member[] = [];

  config: SwiperOptions = {
    slidesPerView: 3,
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    }
  };

  constructor(private membersService: MembersService) {
    this.members = this.membersService.getAllQuestions();
  }

  ngOnInit() {
  }

  getSocialMediaProfile(socialMedia: string, profileId: string) {
    return this.socialMediaUrl.find(a => a.name === socialMedia).url + profileId;
  }
}
