import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TracksRoutingModule } from './tracks-routing.module';


import {TracksPagesComponent} from './pages/tracks-pages/tracks-pages.component'



@NgModule({
    imports: [
    CommonModule,
    TracksRoutingModule,
    TracksPagesComponent,
]
})
export class TracksModule { }
