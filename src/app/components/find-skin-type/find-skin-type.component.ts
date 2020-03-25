import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import * as MinimalForm from 'src/app/plugins/minimal-form.js';

@Component({
  selector: 'find-skin-type',
  templateUrl: './find-skin-type.component.html',
  styleUrls: ['./find-skin-type.component.css']
})
export class FindSkinTypeComponent implements OnInit {
  @ViewChild("theForm", { static: true }) theForm: ElementRef;

  constructor() { }

  ngOnInit() {
    MinimalForm.showForm(this.theForm.nativeElement);
  }

}
