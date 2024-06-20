import { Routes } from '@angular/router';
import { currentUser } from '../../core/utils/getCurrenUser';


export const homeRoutes: Routes = [
  {
    path: 'tracks', // modulo pistas
    resolve:{
      currentUser
    },
    loadChildren:() => import('../tracks/tracks.routes'). then((m) => m.traksRoutes) //carga perezosa
  },
  {
    path: 'favorites', // modulo favoritos
    loadChildren:() => import('../favorites/favorites.routes'). then((m) => m.favoriteRoutes) //carga perezosa
  },
  {
    path: 'history', // modulo historia
    loadChildren:() => import('../history/history.routes'). then((m) => m.historyRoutes) //carga perezosa
  },
  {
    path: '**',// para redireccionar a tracks cuando no exite la ruta
    redirectTo: '/tracks'
  }

];

/**
 * definimos las rutas de los diferentes modulos (tracks, favorites, history)
 * la barra lateral (sidebarCompoenet) facilita la navegacion a estas rutas
 */