import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from 'src/environments/environment';
import * as alertify from 'alertifyjs'

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {
  contactUsApiurl = "/ContactUs/SendEmail";

  constructor(private http: Http) { 
    alertify.defaults.closable = false;
  }

  sendMessage(name: string, email: string, subject: string, message: string) {
    this.http.post(environment.mphlixApiUrl + this.contactUsApiurl, { name: name, email: email, subject: subject, message: message })
    .subscribe(response => {
      alertify.success('Thank you. Our skin specialist will contact you as soon as possible.');
    }, error => {
      alertify.error('Oops! Looks like an error occurred. Please try again.');
      console.log(error);
    });
  }
}
