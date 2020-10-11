import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { PromotionalVideoService } from '../../services/promotional-video.service';
import { PromotionalVideo } from '../../models/PromotionalVideo';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  videos: PromotionalVideo[] = [];

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
      }
    },
    nav: false
  }

  constructor(private videoService: PromotionalVideoService, private sanitizer: DomSanitizer) {
    this.videos = this.videoService.getActiveVideos();
    this.videos.forEach(a=> {
      a.FullUrl = this.sanitizer.bypassSecurityTrustResourceUrl(a.FullUrl);
    });
  }

  ngOnInit() {
  }

  // getVideoUrl(video: PromotionalVideo) {
  //   return this.sanitizer.bypassSecurityTrustResourceUrl(video.FullUrl);
  //   // return this.sanitizer.sanitize(SecurityContext.URL, video.FullUrl);
  // }

}
