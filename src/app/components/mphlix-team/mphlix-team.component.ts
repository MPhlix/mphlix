import { Component, OnInit, HostListener, AfterViewInit, ElementRef } from '@angular/core';
import { Member } from 'src/app/interface/Member';
import { MembersService } from 'src/app/services/members.service';
import { SCREEN_SIZE } from 'src/app/enums/screen-size.enum';
import { ScreenResizeService } from 'src/app/services/screen-resize.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

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

  prefix = 'is-';
  sizes = [
    { id: SCREEN_SIZE.XS, name: 'xs', css: `d-block d-sm-none` },
    { id: SCREEN_SIZE.SM, name: 'sm', css: `d-none d-sm-block d-md-none` },
    { id: SCREEN_SIZE.MD, name: 'md', css: `d-none d-md-block d-lg-none` },
    { id: SCREEN_SIZE.LG, name: 'lg', css: `d-none d-lg-block d-xl-none` },
    { id: SCREEN_SIZE.XL, name: 'xl', css: `d-none d-xl-block` },
  ];

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

  constructor(private membersService: MembersService, private screenResizeService: ScreenResizeService,
    private elementRef: ElementRef) {
    this.members = this.membersService.getAllQuestions();
  }

  ngOnInit() {
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
