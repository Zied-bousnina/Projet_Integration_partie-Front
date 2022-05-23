import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddEquipeRoutingModule } from './add-equipe-routing.module';
import { AddEquipeComponent } from './add-equipe/add-equipe.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddEquipeComponent
  ],
  imports: [
    CommonModule,
    AddEquipeRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AddEquipeModule { }
