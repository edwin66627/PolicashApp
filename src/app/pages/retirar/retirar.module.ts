import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RetirarPageRoutingModule } from './retirar-routing.module';

import { RetirarPage } from './retirar.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RetirarPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RetirarPage]
})
export class RetirarPageModule {}
