import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PricipalPage } from './pricipal.page';

const routes: Routes = [
  {
    path: '',
    component: PricipalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PricipalPageRoutingModule {}
