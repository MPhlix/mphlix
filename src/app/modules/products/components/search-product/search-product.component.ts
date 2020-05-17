import { Component, OnInit, ElementRef } from '@angular/core';
import { SearchProductService } from '../../services/search-product.service';

@Component({
  selector: 'search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {

  constructor(private searchProductService : SearchProductService) { }

  ngOnInit() {
  }

  submitSearch(searchTerm : HTMLInputElement) {
    this.searchProductService.changeSearchTerms(searchTerm.value);
  }

}
