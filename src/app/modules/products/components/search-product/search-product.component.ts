import { Component, OnInit, ElementRef } from '@angular/core';
import { SearchProductService } from '../../services/search-product.service';

@Component({
  selector: 'search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {
  suggestions: string[];
  currentSearchTerm : string;

  constructor(private searchProductService : SearchProductService) { }

  ngOnInit() {
    this.suggestions = this.searchProductService.getSuggestions();
  }

  submitSearch() {
    this.searchProductService.changeSearchTerms(this.currentSearchTerm);
  }

  searchForSuggested(suggestedSearchTerm : string) {
    this.currentSearchTerm = suggestedSearchTerm;
    this.submitSearch();
  }
}
