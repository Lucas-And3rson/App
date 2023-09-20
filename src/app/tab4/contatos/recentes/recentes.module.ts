import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecentesPageRoutingModule } from './recentes-routing.module';

import { RecentesPage } from './recentes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecentesPageRoutingModule
  ],
  declarations: [RecentesPage]
})
export class RecentesPageModule {}
