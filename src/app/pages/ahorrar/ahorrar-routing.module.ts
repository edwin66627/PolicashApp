import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AhorrarPage } from './ahorrar.page';

const routes: Routes = [
  {
    path: '',
    component: AhorrarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AhorrarPageRoutingModule {}
