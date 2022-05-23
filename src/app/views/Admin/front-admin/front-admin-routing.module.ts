import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontAdminComponent } from './front-admin/front-admin.component';

const routes: Routes = [
  {path:"", component:FrontAdminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontAdminRoutingModule { }
