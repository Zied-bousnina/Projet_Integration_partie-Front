import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TournoiComponent } from './tournoi/tournoi.component';

const routes: Routes = [
  {path:"", component: TournoiComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TournoiRoutingModule { }
