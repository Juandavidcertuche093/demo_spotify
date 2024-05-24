import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritePagesComponent } from './pages/favorite-pages/favorite-pages.component';

const routes: Routes = [
  {
    path: '',
    component: FavoritePagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoritesRoutingModule { }
