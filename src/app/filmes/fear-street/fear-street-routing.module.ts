import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FearStreetPage } from './fear-street.page';

const routes: Routes = [
  {
    path: '',
    component: FearStreetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FearStreetPageRoutingModule {}
