import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as MinimalForm from 'src/app/plugins/minimal-form.js';
import { SkinTypeService } from 'src/app/modules/core/services/skin-type.service';
import { Question } from 'src/app/modules/core/interface/Question';

@Component({
  selector: 'find-skin-type',
  templateUrl: './find-skin-type.component.html',
  styleUrls: ['./find-skin-type.component.css']
})
export class FindSkinTypeComponent implements OnInit {
  @ViewChild("theForm", { static: true }) theForm: ElementRef;
  questions: Question[];

  constructor(private skinType: SkinTypeService) {
    this.questions = skinType.getAllQuestions().slice(0, 2);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    MinimalForm.showForm(this.theForm.nativeElement);
  }

  next() {
    console.log('within component');
    // this.questions.push(this.skinType.getAllQuestions().slice(2, 1)[0]);
  }

}
