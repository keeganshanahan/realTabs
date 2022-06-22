import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnotherpagePageRoutingModule } from './anotherpage-routing.module';

import { AnotherpagePage } from './anotherpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnotherpagePageRoutingModule
  ],
  declarations: [AnotherpagePage]
})
export class AnotherpagePageModule {}
