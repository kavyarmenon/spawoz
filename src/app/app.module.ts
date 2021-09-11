import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
// import { PortalModule } from '@angular/cdk/portal';
// import { CdkTableModule } from '@angular/cdk/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductListPageComponent } from 'src/components/product-list-page/product-list-page.component';
import { ProductDetailPageComponent } from 'src/components/product-detail-page/product-detail-page.component';
import { CartPageComponent } from 'src/components/cart-page/cart-page.component';
import { RegistrationPageComponent } from 'src/components/registration-page/registration-page.component';
import { ToastrModule } from 'ngx-toastr';
import { NgxMatIntlTelInputModule } from 'ngx-mat-intl-tel-input';

// import { MatTableModule } from '@angular/material/table';
@NgModule({
  declarations: [
    AppComponent,
    ProductListPageComponent,
    ProductDetailPageComponent,
    CartPageComponent,
    RegistrationPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMatIntlTelInputModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatTabsModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    // PortalModule,
    BrowserAnimationsModule,
    // MatTableModule,
    ToastrModule.forRoot(),
    // CdkTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
