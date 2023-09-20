import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContatosPage } from './contatos.page';

const routes: Routes = [
  {
    path: '',
    component: ContatosPage
  },
  {
    path: 'todos',
    loadChildren: () => import('../Contatos/todos/todos.module').then( m => m.TodosPageModule)
  },
  {
    path: 'recentes',
    loadChildren: () => import('../Contatos/recentes/recentes.module').then( m => m.RecentesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContatosPageRoutingModule {}
