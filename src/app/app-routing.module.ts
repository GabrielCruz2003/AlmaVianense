import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

//Comnfiguração das rotas da aplicação
const routes: Routes = [
  {
    path: '',
    redirectTo: 'sobre-mim',
    pathMatch: 'full'
  },
  {
    path: 'sobre-mim',
    loadChildren: () => import('./paginas/sobre-mim/sobre-mim.module').then(m => m.SobreMimPageModule)
  },
  {
    path: 'viana-do-castelo/gastronomia',
    loadChildren: () => import('./paginas/viana-do-castelo/gastronomia/gastronomia.module').then(m => m.GastronomiaPageModule)
  },
  {
    path: 'viana-do-castelo/infos-uteis',
    loadChildren: () => import('./paginas/viana-do-castelo/infos-uteis/infos-uteis.module').then( m => m.InfosUteisPageModule)
  },
  {
    path: 'viana-do-castelo/alojamento',
    loadChildren: () => import('./paginas/viana-do-castelo/alojamento/alojamento.module').then(m => m.AlojamentoPageModule)
  },
  {
    path: 'viana-do-castelo/pontos-turisticos',
    loadChildren: () => import('./paginas/viana-do-castelo/pontos-turisticos/pontos-turisticos.module').then( m => m.PontosTuristicosPageModule)
  },
  {
    path: 'viana-do-castelo/clubes-desportivos',
    loadChildren: () => import('./paginas/viana-do-castelo/clubes-desportivos/clubes-desportivos.module').then( m => m.ClubesDesportivosPageModule)
  },
  {
    path: 'definicoes',
    loadChildren: () => import('./paginas/definicoes/definicoes.module').then( m => m.DefinicoesPageModule)
  },
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
