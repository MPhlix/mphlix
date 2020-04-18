import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'mphlix-testimonial',
  templateUrl: './mphlix-testimonial.component.html',
  styleUrls: ['./mphlix-testimonial.component.css']
})
export class MphlixTestimonialComponent implements OnInit {

  images= [
    "../../../assets/images/Testimonials/mphlix-testimonial-01-reduced.png",
    "../../../assets/images/Testimonials/mphlix-testimonial-02-reduced.png",
    "../../../assets/images/Testimonials/mphlix-testimonial-03-reduced.png",
    "../../../assets/images/Testimonials/mphlix-testimonial-04-reduced.png",
    "../../../assets/images/Testimonials/mphlix-testimonial-05-reduced.png"
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
      }
    },
    nav: false,
    autoplay: true,
    autoplayHoverPause: true
  }

  constructor() { }

  ngOnInit() {
  }

}
