import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TournoiRoutingModule } from './tournoi-routing.module';
import { TournoiComponent } from './tournoi/tournoi.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TournoiComponent
  ],
  imports: [
    CommonModule,
    TournoiRoutingModule,
    ReactiveFormsModule
  ]
})
export class TournoiModule { }
