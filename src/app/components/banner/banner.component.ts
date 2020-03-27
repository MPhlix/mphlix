import { Component, OnInit } from '@angular/core';
import { carousel } from 'src/app/plugins/carousel-initializer.js';

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    carousel();
  }

}
