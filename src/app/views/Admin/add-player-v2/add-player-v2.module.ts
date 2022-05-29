import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddPlayerV2RoutingModule } from './add-player-v2-routing.module';
import { AddPlayerV2Component } from './add-player-v2/add-player-v2.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddPlayerV2Component
  ],
  imports: [
    CommonModule,
    AddPlayerV2RoutingModule,
    ReactiveFormsModule
  ]
})
export class AddPlayerV2Module { }
