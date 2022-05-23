import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultDemandesComponent } from './consult-demandes/consult-demandes.component';

const routes: Routes = [
  {path:"", component:ConsultDemandesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultDemandesRoutingModule { }
