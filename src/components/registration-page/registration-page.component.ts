import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss'],
})
export class RegistrationPageComponent implements OnInit {
  regForm: FormGroup;
  shippingAddress: FormArray;
  constructor(private fb: FormBuilder, public router: Router) {}

  ngOnInit(): void {
    this.regForm = this.fb.group({
      name: new FormControl(''),
      email: new FormControl('', [Validators.email]),
      mobileNumber: new FormControl(''),
      address: [''],
      pincode: [''],
      phone: new FormControl(''),
      shippingAddress: this.fb.array([]),
    });
    this.addItem();
  }
  addItem() {
    this.shippingAddress = this.regForm.get('shippingAddress') as FormArray;
    this.shippingAddress.push(this.createItem());
  }
  createItem() {
    return this.fb.group({
      shipaddress: new FormControl(''),
      shippincode: new FormControl(''),
      shipphone: new FormControl(''),
    });
  }

  saveUser() {
    this.regForm.markAllAsTouched();

    if (this.regForm.valid === false) {
      return;
    }
    console.log(this.regForm.value, 'this.regForm.value');

    let userDetails = JSON.parse(localStorage.getItem('userList'));
    userDetails.push(this.regForm.value);
    localStorage.setItem('userList', JSON.stringify(userDetails));
    this.router.navigate(['product-list']);
    Swal.fire('Registered...', 'Successfully Register!', 'success');
  }
  back() {
    this.router.navigate(['product-list']);
  }
}
