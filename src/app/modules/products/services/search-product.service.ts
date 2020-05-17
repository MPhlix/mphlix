import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class SearchProductService {
  private searchTerms = new BehaviorSubject('');
  currentSearchTerms = this.searchTerms.asObservable();

  constructor() { }

  changeSearchTerms(words: string) {
    this.searchTerms.next(words);
  }
}
