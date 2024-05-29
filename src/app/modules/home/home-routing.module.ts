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
    path: 'history', // modulo historia
    loadChildren:() => import('./../history/history.module'). then((m) => m.HistoryModule) //carga perezosa
  },
  {
    path: '**',// para redireccionar a tracks cuando no exite la ruta
    redirectTo: '/tracks'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

/**
 * definimos las rutas de los diferentes modulos (tracks, favorites, history)
 * la barra lateral (sidebarCompoenet) facilita la navegacion a estas rutas
 */