import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfficheTournoiComponent } from './affiche-tournoi/affiche-tournoi.component';

const routes: Routes = [
{path:"", component:AfficheTournoiComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AfficheTournoiRoutingModule { }
