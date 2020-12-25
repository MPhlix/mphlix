import { Component, OnInit, ElementRef } from '@angular/core';
import { SearchProductService } from '../../services/search-product.service';
import { Router, Params } from '@angular/router';

@Component({
  selector: 'search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {
  suggestions: string[];
  currentSearchTerm : string;

  constructor(private searchProductService : SearchProductService, private router: Router) { }

  ngOnInit() {
    this.suggestions = this.searchProductService.getSuggestions();
  }

  submitSearch() {
    let queryParams: Params = { name: this.currentSearchTerm };
    this.router.navigate([], {
      queryParams: queryParams
    });
  }

  searchForSuggested(suggestedSearchTerm : string) {
    this.currentSearchTerm = suggestedSearchTerm;
    this.submitSearch();
  }
}
