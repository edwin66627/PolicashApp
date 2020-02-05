import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PricipalPageRoutingModule } from './pricipal-routing.module';

import { PricipalPage } from './pricipal.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PricipalPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PricipalPage]
})
export class PricipalPageModule {}
