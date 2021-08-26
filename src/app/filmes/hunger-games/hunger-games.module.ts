import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HungerGamesPageRoutingModule } from './hunger-games-routing.module';

import { HungerGamesPage } from './hunger-games.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HungerGamesPageRoutingModule
  ],
  declarations: [HungerGamesPage]
})
export class HungerGamesPageModule {}
