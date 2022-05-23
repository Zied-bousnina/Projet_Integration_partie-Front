import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddTeamRoutingModule } from './add-team-routing.module';
import { AddTeamComponent } from './add-team/add-team.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddTeamComponent
  ],
  imports: [
    CommonModule,
    AddTeamRoutingModule,
    ReactiveFormsModule
  ]
})
export class AddTeamModule { }
