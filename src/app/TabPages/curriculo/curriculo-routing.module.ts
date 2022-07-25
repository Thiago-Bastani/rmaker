import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurriculoPage } from './curriculo.page';

const routes: Routes = [
  {
    path: '',
    component: CurriculoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurriculoPageRoutingModule {}
