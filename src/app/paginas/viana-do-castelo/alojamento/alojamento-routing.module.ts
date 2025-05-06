import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlojamentoPage } from './alojamento.page';

const routes: Routes = [
  {
    path: '',
    component: AlojamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlojamentoPageRoutingModule {}
