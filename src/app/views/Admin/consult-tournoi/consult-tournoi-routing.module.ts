import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultTournoiComponent } from './consult-tournoi/consult-tournoi.component';

const routes: Routes = [
  {path:"", component:ConsultTournoiComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultTournoiRoutingModule { }
