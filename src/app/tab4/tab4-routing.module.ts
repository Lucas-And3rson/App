import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab4Page } from './tab4.page';

const routes: Routes = [
  {
    path: '',
    component: Tab4Page,
  },
  {
    path: 'configuracoes',
    loadChildren: () => import('./configuracoes/configuracoes.module').then( m => m.ConfiguracoesPageModule)
  },  {
    path: 'contatos',
    loadChildren: () => import('./contatos/contatos.module').then( m => m.ContatosPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab4PageRoutingModule {}
