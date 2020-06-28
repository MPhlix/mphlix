import { Component, OnInit } from '@angular/core';
import { AccoladesService } from '../../services/accolades.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Accolade } from '../../models/Accolade';

@Component({
  selector: 'accolades',
  templateUrl: './accolades.component.html',
  styleUrls: ['./accolades.component.css']
})
export class AccoladesComponent implements OnInit {

  accolades: Accolade[] = [];

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
      }
    },
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true
  }

  constructor(private accoladesService: AccoladesService) {
    this.accolades = this.accoladesService.getActiveAccolades();
  }

  ngOnInit() {
  }

}
