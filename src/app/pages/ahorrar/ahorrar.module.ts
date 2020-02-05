import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AhorrarPageRoutingModule } from './ahorrar-routing.module';

import { AhorrarPage } from './ahorrar.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AhorrarPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AhorrarPage]
})
export class AhorrarPageModule {}
