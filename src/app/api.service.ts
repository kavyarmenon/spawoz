import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getProductList() {
    return this.http.get('https://fakestoreapi.com/products');
  }
}
