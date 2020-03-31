import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  Images = [
    {
      src: '../assets/images/bg_1-reduced.png',
      id: 0,
      isLarge: true,
    },
    {
      src: '../assets/images/bg_2-reduced.png',
      id: 1,
      isLarge: true
    },
    {
      src: '../assets/images/bg-2_2-removebg-reduced.png',
      id: 1,
      isLarge: false
    }
  ];
  myInterval = 4000;
  showIndicator = false;

  constructor() { }

  ngOnInit() {
  }

}
