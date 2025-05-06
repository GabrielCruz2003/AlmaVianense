import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfosUteisPageRoutingModule } from './infos-uteis-routing.module';

import { InfosUteisPage } from './infos-uteis.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    InfosUteisPageRoutingModule
  ],
  declarations: [InfosUteisPage]
})
export class InfosUteisPageModule {}
