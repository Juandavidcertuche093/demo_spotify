import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'tracks', // modulo pistas
    loadChildren:() => import('./../tracks/tracks.module'). then((m) => m.TracksModule) //carga perezosa
  },
  {
    path: 'favorites', // modulo favoritos
    loadChildren:() => import('./../favorites/favorites.module'). then((m) => m.FavoritesModule) //carga perezosa
  },
  {
    path: 'history', // mosulo historia
    loadChildren:() => import('./../history/history.module'). then((m) => m.HistoryModule) //carga perezosa
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
