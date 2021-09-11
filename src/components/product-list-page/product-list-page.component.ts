import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss'],
})
export class ProductListPageComponent implements OnInit {
  productList = [];

  constructor(private apiService: ApiService, public router: Router) {}

  ngOnInit(): void {
    this.apiService.getProductList().subscribe((result: any) => {
      this.productList = result;
      console.log('check', result);
    });
  }
  onSelect(item) {
    localStorage.setItem('details', JSON.stringify(item));
    this.router.navigate(['product-details']);
  }
}
