import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddTournoiRoutingModule } from './add-tournoi-routing.module';
import { AddTournoiComponent } from './add-tournoi/add-tournoi.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
     AddTournoiComponent
  ],
  imports: [
    CommonModule,
    AddTournoiRoutingModule,
    ReactiveFormsModule
  ]
})
export class AddTournoiModule { }
