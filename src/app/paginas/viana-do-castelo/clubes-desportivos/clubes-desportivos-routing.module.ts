import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClubesDesportivosPage } from './clubes-desportivos.page';

const routes: Routes = [
  {
    path: '',
    component: ClubesDesportivosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClubesDesportivosPageRoutingModule {}
