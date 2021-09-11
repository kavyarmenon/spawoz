import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  productList = JSON.parse(localStorage.getItem('cartList'));
  constructor(public router: Router) {}

  ngOnInit(): void {}
  back() {
    this.router.navigate(['product-list']);
  }
}
