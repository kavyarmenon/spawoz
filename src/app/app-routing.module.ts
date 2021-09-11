import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from 'src/components/cart-page/cart-page.component';
import { ProductDetailPageComponent } from 'src/components/product-detail-page/product-detail-page.component';
import { ProductListPageComponent } from 'src/components/product-list-page/product-list-page.component';
import { RegistrationPageComponent } from 'src/components/registration-page/registration-page.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'product-list',
    pathMatch:'full'
  },
  {
    path:'registration',
    component:RegistrationPageComponent
  },
  {
    path:'product-list',
    component:ProductListPageComponent
  },
  {
    path:'product-details',
    component:ProductDetailPageComponent
  },
  {
    path:'cart',
    component:CartPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
