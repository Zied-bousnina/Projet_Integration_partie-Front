import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundFrontComponent } from './not-found-front/not-found-front.component';

const routes: Routes = [
  {path:"", component:NotFoundFrontComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotFoundFrontRoutingModule { }
