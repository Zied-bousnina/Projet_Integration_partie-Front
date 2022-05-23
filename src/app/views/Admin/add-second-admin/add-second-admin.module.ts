import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddSecondAdminRoutingModule } from './add-second-admin-routing.module';
import { AddSecondAdminComponent } from './add-second-admin/add-second-admin.component';


@NgModule({
  declarations: [
    AddSecondAdminComponent
  ],
  imports: [
    CommonModule,
    AddSecondAdminRoutingModule
  ]
})
export class AddSecondAdminModule { }
