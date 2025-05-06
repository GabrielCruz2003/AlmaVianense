import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClubesDesportivosPageRoutingModule } from './clubes-desportivos-routing.module';

import { ClubesDesportivosPage } from './clubes-desportivos.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ClubesDesportivosPageRoutingModule
  ],
  declarations: [ClubesDesportivosPage]
})
export class ClubesDesportivosPageModule {}
