import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvengersPageRoutingModule } from './avengers-routing.module';

import { AvengersPage } from './avengers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvengersPageRoutingModule
  ],
  declarations: [AvengersPage]
})
export class AvengersPageModule {}
