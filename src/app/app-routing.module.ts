import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'anotherpage',
    loadChildren: () => import('./anotherpage/anotherpage.module').then( m => m.AnotherpagePageModule)
  },
  {
    path: 'anotheranotherpage',
    loadChildren: () => import('./anotheranotherpage/anotheranotherpage.module').then( m => m.AnotheranotherpagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
