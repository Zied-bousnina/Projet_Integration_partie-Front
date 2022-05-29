import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTeamV2Component } from './add-team-v2/add-team-v2.component';

const routes: Routes = [
  {path:"", component: AddTeamV2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddTeamV2RoutingModule { }
