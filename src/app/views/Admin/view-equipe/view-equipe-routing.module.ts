import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewEquipeComponent } from './view-equipe/view-equipe.component';

const routes: Routes = [
  {path:"", component:ViewEquipeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewEquipeRoutingModule { }
