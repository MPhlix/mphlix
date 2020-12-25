import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router, Params } from '@angular/router';

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  Images = [
    {
      src: '../../../assets/images/Banner/bg_1-reduced.png',
      id: 0,
      hasUrl: false
    },
    {
      src: '../../../assets/images/Banner/bg_2-reduced.png',
      id: 1,
      hasUrl: false
    },
    {
      src: '../../../assets/images/Banner/bg-2_2-removebg-reduced-removebg.png',
      id: 2,
      hasUrl: false
    },
    {
      src: '../../../assets/images/Banner/liptrip.png',
      id: 3,
      hasUrl: true
    }
  ];

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
    autoplayTimeout: 3000
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  showMainMenu() {
    this.showSkinTypeQuiz = false;
  }

  changeUrl() {
    let queryParams: Params = { name: 'lip' };
    this.router.navigate(['../products'], {
      queryParams: queryParams
    });
  }

}
