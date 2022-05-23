import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultMatchComponent } from './consult-match/consult-match.component';

const routes: Routes = [
  {path:"", component:ConsultMatchComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultMatchRoutingModule { }
