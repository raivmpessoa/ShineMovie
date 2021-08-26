import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TwiligthPageRoutingModule } from './twiligth-routing.module';

import { TwiligthPage } from './twiligth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TwiligthPageRoutingModule
  ],
  declarations: [TwiligthPage]
})
export class TwiligthPageModule {}
