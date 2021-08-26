import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HungerGamesPage } from './hunger-games.page';

const routes: Routes = [
  {
    path: '',
    component: HungerGamesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HungerGamesPageRoutingModule {}
