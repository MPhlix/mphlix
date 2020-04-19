import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Question } from 'src/app/modules/core/interface/Question';
import { SkinTypeService } from 'src/app/modules/core/services/skin-type.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { Option } from 'src/app/modules/core/interface/Option';
import { MatCheckboxChange } from '@angular/material';

interface Answer {
  questionId: number,
  optionId: number
}

@Component({
  selector: 'skin-type-quiz',
  templateUrl: './skin-type-quiz.component.html',
  styleUrls: ['./skin-type-quiz.component.css'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ height: "40px", opacity: 0 }),
            animate('500ms ease-in')
          ]
        )
      ]
    ),
    trigger(
      'fadeInAnimation',
      [
        transition(
          ':enter',
          [
            style({ opacity: 0 }),
            animate('500ms ease-in',
              style({ opacity: 1 }))
          ]
        )
      ]
    )
  ]
})
export class SkinTypeQuizComponent implements OnInit {
  questions: Question[];
  pager = {
    index: 0,
    size: 1,
    count: 1
  };
  answers: Answer[] = [];

  @Output() backToMain = new EventEmitter();

  constructor(private skinType: SkinTypeService) {
    this.questions = this.skinType.getAllQuestions();
  }

  ngOnInit() {
  }

  get filteredQuestions() {
    let validQs: Question[] = [];

    if (this.questions) {
      let rootOption: Option;
      let rootQuestion = this.answers.length > 0 && this.questions.find((a: Question) => a.id === this.answers[0].questionId);

      if (rootQuestion) {
        rootOption = rootQuestion.options.find(b => b.selected);
        validQs = this.questions.filter((a: Question) => a.category === 'root' || a.category === rootOption.title);
      }
      else
        validQs = this.questions;
    }
    this.pager.count = validQs.length;
    return validQs.slice(this.pager.index, this.pager.index + this.pager.size);
  }

  optionSelected(event: MatCheckboxChange, questionId, optionId) {
    if (event.checked)
      this.answers.push({ questionId, optionId });
    else {
      this.answers.splice(this.answers.findIndex(a => a.questionId === questionId && a.optionId === optionId), 1);
    }
  }

  previous() {
    if (this.pager.index > 0) {
      this.pager.index--;
    }
    else
      this.backToMain.emit();
  }

  next() {
    if (this.pager.index < this.pager.count - 1) {
      this.pager.index++;
    }
  }

  get CanGoBack() {
    return this.pager.index === 0;
  }
}
