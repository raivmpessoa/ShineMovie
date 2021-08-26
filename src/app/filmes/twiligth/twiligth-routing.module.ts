import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TwiligthPage } from './twiligth.page';

const routes: Routes = [
  {
    path: '',
    component: TwiligthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TwiligthPageRoutingModule {}
