import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HistoryRoutingModule } from './history-routing.module';


import {HistoryPagesComponent} from './pages/history-pages/history-pages.component';
import {SearchComponent} from './components/search/search.component'



@NgModule({
    imports: [
    CommonModule,
    HistoryRoutingModule,
    FormsModule,
    SearchComponent,
    HistoryPagesComponent
]
})
export class HistoryModule { }
