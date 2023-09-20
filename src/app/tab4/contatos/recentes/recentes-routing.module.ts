import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecentesPage } from './recentes.page';

const routes: Routes = [
  {
    path: '',
    component: RecentesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecentesPageRoutingModule {}
