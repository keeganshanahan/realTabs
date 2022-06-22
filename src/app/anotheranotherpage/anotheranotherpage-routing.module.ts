import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnotheranotherpagePage } from './anotheranotherpage.page';

const routes: Routes = [
  {
    path: '',
    component: AnotheranotherpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnotheranotherpagePageRoutingModule {}
