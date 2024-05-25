import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TracksRoutingModule } from './tracks-routing.module';
import {SharedModule} from './../../shared/shared.module';

import {TracksPagesComponent} from './pages/tracks-pages/tracks-pages.component'



@NgModule({
  declarations: [
    TracksPagesComponent
  ],
  imports: [
    CommonModule,
    TracksRoutingModule,
    SharedModule,   
    
  ]
})
export class TracksModule { }
