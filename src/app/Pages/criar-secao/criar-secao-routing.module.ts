import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriarSecaoPage } from './criar-secao.page';

const routes: Routes = [
  {
    path: '',
    component: CriarSecaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriarSecaoPageRoutingModule {}
