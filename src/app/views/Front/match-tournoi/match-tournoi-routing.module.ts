import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchTournoiComponent } from './match-tournoi/match-tournoi.component';

const routes: Routes = [
  {path:"", component: MatchTournoiComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchTournoiRoutingModule { }
