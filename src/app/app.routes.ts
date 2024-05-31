import { Routes } from '@angular/router';
import { HomePagesComponent } from './modules/home/pages/home-pages/home-pages.component';
import { SessionGuardFunction } from './core/guards/sessionv2.guard';


export const routes: Routes = [
    {
        path: 'auth', // (public)
        loadChildren:() => import('./modules/auth/auth.routes'). then((m) => m.AuthRoutes) //carga perezosa
    },
    {
        path: '', // ruta privada!!! se nesecita cookie, token .... session
        component: HomePagesComponent, //compoenete principal para esta ruta
        loadChildren:() => import('./modules/home/home.routes'). then((m) => m.homeRoutes), //carga perezosa
        canActivate: [SessionGuardFunction]
    }
];

