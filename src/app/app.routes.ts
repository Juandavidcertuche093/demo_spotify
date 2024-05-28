import { Routes,  RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { HomePagesComponent } from './modules/home/pages/home-pages/home-pages.component';
import { SessionGuard } from './core/guards/session.guard';


export const routes: Routes = [
    {
        path: 'auth', // (public)
        loadChildren:() => import('./modules/auth/auth.module'). then((m) => m.AuthModule) //carga perezosa
    },
    {
        path: '', // (privada) localhost:4200/ esta seria la raiz del proyecto 
        component: HomePagesComponent, //compoenete principal para esta ruta
        loadChildren:() => import('./modules/home/home.module'). then((m) => m.HomeModule), //carga perezosa
        canActivate: [SessionGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }