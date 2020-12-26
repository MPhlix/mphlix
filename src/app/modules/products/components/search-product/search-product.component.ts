import { Component, OnInit, ElementRef } from '@angular/core';
import { SearchProductService } from '../../services/search-product.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { ObjectHelper } from 'src/app/modules/shared/common-utils/helper-services/object-helper';

@Component({
  selector: 'search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {
  suggestions: string[];
  currentSearchTerm : string;

  constructor(private searchProductService : SearchProductService, private router: Router,
    private route: ActivatedRoute, private objectHelper: ObjectHelper) { }

  ngOnInit() {
    this.suggestions = this.searchProductService.getSuggestions();
    this.route.queryParams.subscribe(params => {
      this.currentSearchTerm = params['name'];
      // if (!this.objectHelper.isNullOrEmpty(this.productName))
        this.searchProductService.changeSearchTerms(this.currentSearchTerm);
    });
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
