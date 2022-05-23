import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { FrontLayoutComponent } from './front-layout/front-layout.component';
import { AppRoutingModule } from '../app-routing.module';
import { LoginFComponent } from './login-f/login-f.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ShopComponent } from './shop/shop.component';
// import { SignInComponent } from '../views/Front/sign-in/sign-in/sign-in.component';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    UserLayoutComponent,
    FrontLayoutComponent,
    SignInComponent,


    LoginFComponent,
      ShopComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LayoutsModule { }
