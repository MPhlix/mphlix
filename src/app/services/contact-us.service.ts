import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {
  url = "https://mphlix-api.azurewebsites.net/ContactUs/SendEmail";

  constructor(private http: Http) { }

  sendMessage(name: string, email: string, subject: string, message: string) {
    this.http.post(this.url, { name: name, email: email, subject: subject, message: message })
    .subscribe(response => {
      console.log(response);
    });
  }
}
