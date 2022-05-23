import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParticipantRoutingModule } from './participant-routing.module';
import { ParticipantComponent } from './participant/participant.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ParticipantComponent
  ],
  imports: [
    CommonModule,
    ParticipantRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ParticipantModule { }
