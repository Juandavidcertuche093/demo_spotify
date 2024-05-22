import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import {HomePagesComponent} from './pages/home-pages/home-pages.component'


@NgModule({
  declarations: [
    HomePagesComponent
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
