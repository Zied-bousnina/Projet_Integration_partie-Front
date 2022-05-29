import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlayerV2Component } from './add-player-v2/add-player-v2.component';

const routes: Routes = [
  {path:"", component: AddPlayerV2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddPlayerV2RoutingModule { }
