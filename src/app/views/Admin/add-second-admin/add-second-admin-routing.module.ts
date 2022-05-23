import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSecondAdminComponent } from './add-second-admin/add-second-admin.component';

const routes: Routes = [
  {path:"", component:AddSecondAdminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddSecondAdminRoutingModule { }
