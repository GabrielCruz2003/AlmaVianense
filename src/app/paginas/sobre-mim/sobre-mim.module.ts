import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SobreMimPageRoutingModule } from './sobre-mim-routing.module';

import { SobreMimPage } from './sobre-mim.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule, // Necessário para utilizar {{ 'key' | translate }} no HTML
    SobreMimPageRoutingModule
  ],
  declarations: [SobreMimPage]
})
export class SobreMimPageModule {}
