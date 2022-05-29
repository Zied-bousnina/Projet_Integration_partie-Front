import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddTeamV2RoutingModule } from './add-team-v2-routing.module';
import { AddTeamV2Component } from './add-team-v2/add-team-v2.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddTeamV2Component
  ],
  imports: [
    CommonModule,
    AddTeamV2RoutingModule,
    ReactiveFormsModule
  ]
})
export class AddTeamV2Module { }
