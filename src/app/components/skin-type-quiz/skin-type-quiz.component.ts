import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Question } from 'src/app/interface/Question';
import { SkinTypeService } from 'src/app/services/skin-type/skin-type.service';
import { trigger, transition, style, animate } from '@angular/animations';

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
            style({ height: "70px" }),
            animate('500ms ease-in')
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

  @Output() backToMain = new EventEmitter();

  constructor(private skinType: SkinTypeService) {
    this.questions = skinType.getAllQuestions();
    this.pager.count = this.questions.length;
  }

  ngOnInit() {
  }

  get filteredQuestions() {
    return (this.questions) ?
      this.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
  }

  onSelect(question: Question) {
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

  get CanGoAhead() {
    return this.pager.index === 0;
  }
}
