import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SobreMimPage } from './sobre-mim.page';

const routes: Routes = [
  {
    path: '',
    component: SobreMimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SobreMimPageRoutingModule {}
