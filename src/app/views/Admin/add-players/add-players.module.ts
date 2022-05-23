import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddPlayersRoutingModule } from './add-players-routing.module';
import { AddPlayerComponent } from './add-player/add-player.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddPlayerComponent
  ],
  imports: [
    CommonModule,
    AddPlayersRoutingModule,
    ReactiveFormsModule
  ]
})
export class AddPlayersModule { }
