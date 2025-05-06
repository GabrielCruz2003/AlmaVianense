import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PontosTuristicosPageRoutingModule } from './pontos-turisticos-routing.module';

import { PontosTuristicosPage } from './pontos-turisticos.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    PontosTuristicosPageRoutingModule
  ],
  declarations: [PontosTuristicosPage]
})
export class PontosTuristicosPageModule {}
