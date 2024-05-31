import { Routes } from '@angular/router';
import { HomePagesComponent } from './modules/home/pages/home-pages/home-pages.component';
import { SessionGuard } from './core/guards/session.guard';


export const routes: Routes = [
    {
        path: 'auth', // (public)
        loadChildren:() => import('./modules/auth/auth.routes'). then((m) => m.AuthRoutes) //carga perezosa
    },
    {
        path: '', // (privada) localhost:4200/ esta seria la raiz del proyecto 
        component: HomePagesComponent, //compoenete principal para esta ruta
        loadChildren:() => import('./modules/home/home.routes'). then((m) => m.homeRoutes), //carga perezosa
        canActivate: [SessionGuard]
    }
];

