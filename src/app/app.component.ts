import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'spawoz-project';
  constructor() {}
  ngOnInit(): void {
    localStorage.setItem('cartList', JSON.stringify([]));
    localStorage.setItem('userList', JSON.stringify([]));
  }
}
