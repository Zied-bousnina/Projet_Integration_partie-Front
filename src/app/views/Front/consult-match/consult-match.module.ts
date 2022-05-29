import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultMatchRoutingModule } from './consult-match-routing.module';
import { ConsultMatchComponent } from './consult-match/consult-match.component';


@NgModule({
  declarations: [
    ConsultMatchComponent
  ],
  imports: [
    CommonModule,
    ConsultMatchRoutingModule
  ]
})
export class ConsultMatchModule { }
