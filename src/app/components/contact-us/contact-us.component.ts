import { Component, OnInit } from '@angular/core';
import { ContactUsService } from 'src/app/services/contact-us.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as alertify from 'alertifyjs'

@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  name: string;
  email: string;
  subject: string;
  message: string;

  contactForm = new FormGroup({
    nameField: new FormControl('', Validators.required),
    emailField: new FormControl('', [Validators.required, Validators.email]),
    subjectField: new FormControl('', Validators.required),
    messageField: new FormControl('', Validators.required),
  })

  constructor(private contactService: ContactUsService) { }

  ngOnInit() {
    alertify.defaults.closable = false;
  }

  submit() {
    if (!this.NameField.valid || !this.EmailField.valid || !this.SubjectField.valid || !this.MessageField.valid) {
      alertify.error('Please enter all the details properly');
      return;
    }
    this.contactService.sendMessage(this.name, this.email, this.subject, this.message).subscribe(response => {
      alertify.success('Thank you. Our skin specialist will contact you as soon as possible.');
    }, error => {
      alertify.error('Oops! Looks like an error occurred. Please try again.');
      console.log(error);
    });;
  }

  get NameField() {
    return this.contactForm.get('nameField');
  }
  get EmailField() {
    return this.contactForm.get('emailField');
  }
  get SubjectField() {
    return this.contactForm.get('subjectField');
  }
  get MessageField() {
    return this.contactForm.get('messageField');
  }
}
