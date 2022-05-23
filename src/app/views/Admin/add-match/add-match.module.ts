import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddMatchRoutingModule } from './add-match-routing.module';
import { AddMatchComponent } from './add-match/add-match.component';


@NgModule({
  declarations: [
    AddMatchComponent
  ],
  imports: [
    CommonModule,
    AddMatchRoutingModule
  ]
})
export class AddMatchModule { }
