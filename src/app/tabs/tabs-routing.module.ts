import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'editor',
        loadChildren: () => import('../TabPages/editor/editor.module').then(m => m.EditorPageModule)
      },
      {
        path: 'curriculo',
        loadChildren: () => import('../TabPages/curriculo/curriculo.module').then(m => m.CurriculoPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/curriculo',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/curriculo',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
