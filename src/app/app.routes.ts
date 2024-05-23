import { Routes,  RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { HomePagesComponent } from './modules/home/pages/home-pages/home-pages.component';

export const routes: Routes = [
    {
        path: 'auth', //
        loadChildren:() => import('./modules/auth/auth.module'). then((m) => m.AuthModule) //carga perezosa
    },
    {
        path: '', // localhost:4200/ esta seria la raiz del proyecto
        component: HomePagesComponent, //compoenete principal para esta ruta
        loadChildren:() => import('./modules/home/home.module'). then((m) => m.HomeModule) //carga perezosa
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }