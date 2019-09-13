import { Component, OnInit } from '@angular/core';
import { ContactUsService } from 'src/app/services/contact-us.service';

@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  name: string;
  email: string;
  subject: string;
  message : string;

  constructor(private contactService: ContactUsService ) { }

  ngOnInit() {
  }

  submit() {
    this.contactService.sendMessage(this.name, this.email, this.subject, this.message);
  }
}
