import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JusticeLeaguePageRoutingModule } from './justice-league-routing.module';

import { JusticeLeaguePage } from './justice-league.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JusticeLeaguePageRoutingModule
  ],
  declarations: [JusticeLeaguePage]
})
export class JusticeLeaguePageModule {}
