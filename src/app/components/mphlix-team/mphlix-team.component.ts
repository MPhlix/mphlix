import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mphlix-team',
  templateUrl: './mphlix-team.component.html',
  styleUrls: ['./mphlix-team.component.css']
})
export class MphlixTeamComponent implements OnInit {
  testPath = '../assets/images/Soapy crew/mphlix-member-mahashweta-mohapatra-reduced.jpg';

  Images = [
    {
      src: '../assets/images/Soapy crew/mphlix-member-mahashweta-mohapatra-reduced.jpg',
      id: 0
    },
    {
      src: '../assets/images/Soapy crew/mphlix-member-aparajita-mohapatra-reduced.jpg',
      id: 1
    },
    {
      src: '../assets/images/Soapy crew/mphlix-member-anum-kagdi-reduced.jpg',
      id: 2
    },
    {
      src: '../assets/images/Soapy crew/mphlix-member-bhavika-sabnani-reduced.jpg',
      id: 3
    }
  ];
  myInterval = 4000;
  showIndicator = false;

  constructor() { }

  ngOnInit() {
  }

}
