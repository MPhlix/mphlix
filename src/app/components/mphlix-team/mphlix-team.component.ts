import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/interface/Member';
import { MembersService } from 'src/app/services/members.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

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

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
  }

  constructor(private membersService: MembersService) {
    this.members = this.membersService.getAllQuestions();
  }

  ngOnInit() {
  }

  getSocialMediaProfile(socialMedia: string, profileId: string) {
    return this.socialMediaUrl.find(a => a.name === socialMedia).url + profileId;
  }
}
