import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  images= [
    "../../../assets/images/Testimonials/mphlix-testimonial-01-reduced.png",
    "../../../assets/images/Testimonials/mphlix-testimonial-02-reduced.png",
    "../../../assets/images/Testimonials/mphlix-testimonial-03-reduced.png",
    "../../../assets/images/Testimonials/mphlix-testimonial-04-reduced.png",
    "../../../assets/images/Testimonials/mphlix-testimonial-05-reduced.png"
  ];
  
  config: SwiperOptions = {
    slidesPerView: 1,
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

  constructor() { }

  ngOnInit() {
  }

}
