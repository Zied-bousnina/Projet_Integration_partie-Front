import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundFrontRoutingModule } from './not-found-front-routing.module';
import { NotFoundFrontComponent } from './not-found-front/not-found-front.component';


@NgModule({
  declarations: [
    NotFoundFrontComponent
  ],
  imports: [
    CommonModule,
    NotFoundFrontRoutingModule
  ]
})
export class NotFoundFrontModule { }
