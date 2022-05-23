import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TournoiRoutingModule } from './tournoi-routing.module';
import { TournoiComponent } from './tournoi/tournoi.component';


@NgModule({
  declarations: [
    TournoiComponent
  ],
  imports: [
    CommonModule,
    TournoiRoutingModule
  ]
})
export class TournoiModule { }
