import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeMatchRoutingModule } from './type-match-routing.module';
import { TypeMatchComponent } from './type-match/type-match.component';


@NgModule({
  declarations: [
    TypeMatchComponent
  ],
  imports: [
    CommonModule,
    TypeMatchRoutingModule
  ]
})
export class TypeMatchModule { }
