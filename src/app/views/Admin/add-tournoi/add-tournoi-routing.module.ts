import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTournoiComponent } from './add-tournoi/add-tournoi.component';


const routes: Routes = [
{path:"", component:AddTournoiComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddTournoiRoutingModule { }
