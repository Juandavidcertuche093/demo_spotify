import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';


import { FavoritePagesComponent } from "./pages/favorite-pages/favorite-pages.component";



@NgModule({
    imports: [
    CommonModule,
    FavoritesRoutingModule,
    FavoritePagesComponent
]
})
export class FavoritesModule { }
