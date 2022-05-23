import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AfficheTournoiRoutingModule } from './affiche-tournoi-routing.module';
import { AfficheTournoiComponent } from './affiche-tournoi/affiche-tournoi.component';


@NgModule({
  declarations: [
    AfficheTournoiComponent
  ],
  imports: [
    CommonModule,
    AfficheTournoiRoutingModule
  ]
})
export class AfficheTournoiModule { }
