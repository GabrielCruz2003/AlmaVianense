import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfosUteisPage } from './infos-uteis.page';

const routes: Routes = [
  {
    path: '',
    component: InfosUteisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfosUteisPageRoutingModule {}
