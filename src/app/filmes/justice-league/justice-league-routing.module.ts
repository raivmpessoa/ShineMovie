import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JusticeLeaguePage } from './justice-league.page';

const routes: Routes = [
  {
    path: '',
    component: JusticeLeaguePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JusticeLeaguePageRoutingModule {}
