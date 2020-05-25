import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import suggestionsJson from 'src/assets/json/suggestions.json';

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

  getSuggestions() {
    return suggestionsJson;
  }
}
