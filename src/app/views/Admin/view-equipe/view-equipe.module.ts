import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewEquipeRoutingModule } from './view-equipe-routing.module';
import { ViewEquipeComponent } from './view-equipe/view-equipe.component';


@NgModule({
  declarations: [
    ViewEquipeComponent
  ],
  imports: [
    CommonModule,
    ViewEquipeRoutingModule
  ]
})
export class ViewEquipeModule { }
