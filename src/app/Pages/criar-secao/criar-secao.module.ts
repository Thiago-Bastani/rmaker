import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriarSecaoPageRoutingModule } from './criar-secao-routing.module';

import { CriarSecaoPage } from './criar-secao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriarSecaoPageRoutingModule
  ],
  declarations: [CriarSecaoPage]
})
export class CriarSecaoPageModule {}
