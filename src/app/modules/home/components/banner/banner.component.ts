import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router, Params } from '@angular/router';
import { Banner } from '../../models/Banner';

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  Banners: Banner[] = [
    {
      src: '../../../assets/images/Banner/bg_1-reduced.png',
      id: 0,
      hasUrl: false,
      priority: 1,
      keyword: null
    },
    {
      src: '../../../assets/images/Banner/bg_2-reduced.png',
      id: 1,
      hasUrl: false,
      priority: 1,
      keyword: null
    },
    {
      src: '../../../assets/images/Banner/bg-2_2-removebg-reduced-removebg.png',
      id: 2,
      hasUrl: false,
      priority: 1,
      keyword: null
    },
    {
      src: '../../../assets/images/Banner/liptrip.png',
      id: 3,
      hasUrl: true,
      priority: 0,
      keyword: "lip"
    }
  ];

  SortedBanners: Banner[];

  showSkinTypeQuiz = false;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      }
    },
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000
  }

  constructor(private router: Router) { }

  ngOnInit() {
    this.SortedBanners = this.Banners.sort((a, b) => a.priority - b.priority);
  }

  showMainMenu() {
    this.showSkinTypeQuiz = false;
  }

  changeUrl(keyword: string) {
    let queryParams: Params = { name: keyword };
    this.router.navigate(['../products'], {
      queryParams: queryParams
    });
  }

}
