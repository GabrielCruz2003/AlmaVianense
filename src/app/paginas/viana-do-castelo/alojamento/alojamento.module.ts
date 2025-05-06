import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlojamentoPageRoutingModule } from './alojamento-routing.module';

import { AlojamentoPage } from './alojamento.page';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    AlojamentoPageRoutingModule
  ],
  declarations: [AlojamentoPage]
})
export class AlojamentoPageModule {}
