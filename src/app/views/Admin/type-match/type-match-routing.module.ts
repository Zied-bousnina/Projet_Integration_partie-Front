import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeMatchComponent } from './type-match/type-match.component';

const routes: Routes = [
  {path:"", component:TypeMatchComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeMatchRoutingModule { }
