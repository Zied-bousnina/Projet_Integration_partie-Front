import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultDemandesRoutingModule } from './consult-demandes-routing.module';
import { ConsultDemandesComponent } from './consult-demandes/consult-demandes.component';


@NgModule({
  declarations: [
    ConsultDemandesComponent
  ],
  imports: [
    CommonModule,
    ConsultDemandesRoutingModule
  ]
})
export class ConsultDemandesModule { }
