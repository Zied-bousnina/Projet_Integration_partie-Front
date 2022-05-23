import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontAdminRoutingModule } from './front-admin-routing.module';
import { FrontAdminComponent } from './front-admin/front-admin.component';


@NgModule({
  declarations: [
    FrontAdminComponent
  ],
  imports: [
    CommonModule,
    FrontAdminRoutingModule
  ]
})
export class FrontAdminModule { }
