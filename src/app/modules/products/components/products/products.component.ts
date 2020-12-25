import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchProductService } from '../../services/search-product.service';
import { ObjectHelper } from 'src/app/modules/shared/common-utils/helper-services/object-helper';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productName: string;

  constructor(private route: ActivatedRoute, private searchProductService: SearchProductService,
    private objectHelper: ObjectHelper) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.productName = params['name'];
      if (!this.objectHelper.isNullOrEmpty(this.productName))
        this.searchProductService.changeSearchTerms(this.productName);
    });
  }

}
