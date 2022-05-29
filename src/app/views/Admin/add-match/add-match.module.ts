import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddMatchRoutingModule } from './add-match-routing.module';
import { AddMatchComponent } from './add-match/add-match.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddMatchComponent
  ],
  imports: [
    CommonModule,
    AddMatchRoutingModule,
    ReactiveFormsModule
  ]
})
export class AddMatchModule { }
