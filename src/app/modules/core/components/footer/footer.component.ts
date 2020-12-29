import { Component, OnInit } from '@angular/core';
import { AppConfigService } from '../../services/app-config.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  version : string;

  constructor(private appConfigService: AppConfigService) { }

  ngOnInit() {
    this.version = this.appConfigService.getReleaseInformation();
  }

}
