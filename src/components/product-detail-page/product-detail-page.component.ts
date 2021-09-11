import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss'],
})
export class ProductDetailPageComponent implements OnInit {
  details = JSON.parse(localStorage.getItem('details'));

  constructor(public router: Router) {}

  ngOnInit(): void {}
  back() {
    this.router.navigate(['product-list']);
  }
  onSelect() {
    let cartItems = JSON.parse(localStorage.getItem('cartList'));
    cartItems.push(this.details);
    localStorage.setItem('cartList', JSON.stringify(cartItems));
    // this.toastr.success('Product Added to Cart', 'Success ');
    Swal.fire('Added To Cart...', 'Successfully Addedd!', 'success');
  }
}
