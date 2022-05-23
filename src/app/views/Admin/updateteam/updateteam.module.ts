import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateteamRoutingModule } from './updateteam-routing.module';
import { UpdateTeamComponent } from './update-team/update-team.component';


@NgModule({
  declarations: [
    UpdateTeamComponent
  ],
  imports: [
    CommonModule,
    UpdateteamRoutingModule
  ]
})
export class UpdateteamModule { }
