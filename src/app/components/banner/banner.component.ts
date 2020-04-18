import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  Images = [
    {
      src: '../assets/images/bg_1-reduced.png',
      id: 0
    },
    {
      src: '../assets/images/bg_2-reduced.png',
      id: 1
    },
    {
      src: '../assets/images/bg-2_2-removebg-reduced-removebg.png',
      id: 2
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

  constructor() { }

  ngOnInit() {
  }

  showMainMenu(){
    this.showSkinTypeQuiz = false;
  }

}
