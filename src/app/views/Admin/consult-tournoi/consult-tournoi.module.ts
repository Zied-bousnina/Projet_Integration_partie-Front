import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultTournoiRoutingModule } from './consult-tournoi-routing.module';
import { ConsultTournoiComponent } from './consult-tournoi/consult-tournoi.component';



@NgModule({
  declarations: [
    ConsultTournoiComponent

  ],
  imports: [
    CommonModule,
    ConsultTournoiRoutingModule
  ]
})
export class ConsultTournoiModule { }
