import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchTournoiRoutingModule } from './match-tournoi-routing.module';
import { MatchTournoiComponent } from './match-tournoi/match-tournoi.component';


@NgModule({
  declarations: [
    MatchTournoiComponent
  ],
  imports: [
    CommonModule,
    MatchTournoiRoutingModule
  ]
})
export class MatchTournoiModule { }
