import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnotherpagePage } from './anotherpage.page';

const routes: Routes = [
  {
    path: '',
    component: AnotherpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnotherpagePageRoutingModule {}
