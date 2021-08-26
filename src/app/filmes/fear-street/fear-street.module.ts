import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FearStreetPageRoutingModule } from './fear-street-routing.module';

import { FearStreetPage } from './fear-street.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FearStreetPageRoutingModule
  ],
  declarations: [FearStreetPage]
})
export class FearStreetPageModule {}
