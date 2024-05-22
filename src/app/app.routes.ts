import { Routes,  RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

export const routes: Routes = [
    {
        path: '', // localhost:4200/ esta seria la raiz del proyecto
        loadChildren:() => import('./modules/home/home.module'). then((m) => m.HomeModule) //carga perezoza 
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }