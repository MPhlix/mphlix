import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {
  contactUsApiurl = "/ContactUs/SendEmail";

  constructor(private http: Http) { }

  sendMessage(name: string, email: string, subject: string, message: string) {
    this.http.post(environment.mphlixApiUrl + this.contactUsApiurl, { name: name, email: email, subject: subject, message: message })
    .subscribe(response => {
      console.log(response);
    });
  }
}
