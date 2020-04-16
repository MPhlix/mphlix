import { Component, OnInit, HostListener, AfterViewInit, ElementRef } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { Member } from 'src/app/interface/Member';
import { MembersService } from 'src/app/services/members.service';
import { SCREEN_SIZE } from 'src/app/enums/screen-size.enum';
import { ScreenResizeService } from 'src/app/services/screen-resize.service';

@Component({
  selector: 'mphlix-team',
  templateUrl: './mphlix-team.component.html',
  styleUrls: ['./mphlix-team.component.css']
})
export class MphlixTeamComponent implements OnInit, AfterViewInit {

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

  prefix = 'is-';
  sizes = [
    { id: SCREEN_SIZE.XS, name: 'xs', css: `d-block d-sm-none` },
    { id: SCREEN_SIZE.SM, name: 'sm', css: `d-none d-sm-block d-md-none` },
    { id: SCREEN_SIZE.MD, name: 'md', css: `d-none d-md-block d-lg-none` },
    { id: SCREEN_SIZE.LG, name: 'lg', css: `d-none d-lg-block d-xl-none` },
    { id: SCREEN_SIZE.XL, name: 'xl', css: `d-none d-xl-block` },
  ];

  constructor(private membersService: MembersService, private screenResizeService: ScreenResizeService,
    private elementRef: ElementRef) {
    this.members = this.membersService.getAllQuestions();
  }

  ngOnInit() {
    setTimeout(() => {
      this.config = null;
      setTimeout(() => {
        this.config = {
          slidesPerView: null,
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
      }, 1000);
    }, 2000);
  }

  ngAfterViewInit() {
    this.detectScreenSize();
  }

  getSocialMediaProfile(socialMedia: string, profileId: string) {
    return this.socialMediaUrl.find(a => a.name === socialMedia).url + profileId;
  }

  @HostListener("window:resize", [])
  private onResize() {
    this.detectScreenSize();
  }

  private detectScreenSize() {
    const currentSize = this.sizes.find(x => {
      // console.log('vale of x', x.name);
      // if(x.name === 'xs'){
      //   this.config.slidesPerView = 1;
      // }
      // get the HTML element
      const el = this.elementRef.nativeElement.querySelector(`.${this.prefix}${x.id}`);

      // check its display property value
      const isVisible = window.getComputedStyle(el).display != 'none';

      return isVisible;
    });

    this.screenResizeService.onResize(currentSize.id);
  }
}
