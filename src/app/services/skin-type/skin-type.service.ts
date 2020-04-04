import { Injectable } from '@angular/core';
import { Question } from '../../interface/Question';
import * as questionsJson from 'src/assets/json/questions.json';

@Injectable({
  providedIn: 'root'
})
export class SkinTypeService {
  questions: Question[];

  constructor() {
    this.questions = (questionsJson as any).default as Question[];
  }

  getAllQuestions() {
    return this.questions;
  }
}
