import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {HeaderUserComponent} from './components/header-user/header-user.component';
import {MediaPlayComponent} from './components/media-play/media-play.component';
import {SideBarComponent} from './components/side-bar/side-bar.component';
import {CardPlayerComponent} from './components/card-player/card-player.component';
import {SectionGenericaComponent} from './components/section-generica/section-generica.component';
import { PlayListHeaderComponent } from './components/play-list-header/play-list-header.component';
import { PlayListBodyComponent } from './components/play-list-body/play-list-body.component';
import {OrderListPipe} from './pipe/order-list.pipe';
import {ImgBrokenDirective} from './directives/img-broken.directive'



@NgModule({
  declarations: [
    HeaderUserComponent,
    MediaPlayComponent,
    SideBarComponent,
    CardPlayerComponent,
    SectionGenericaComponent,
    PlayListHeaderComponent,
    PlayListBodyComponent,
    OrderListPipe,
    ImgBrokenDirective
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    

  ],
  exports:[
    SideBarComponent,
    MediaPlayComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    SectionGenericaComponent,
    PlayListHeaderComponent,
    PlayListBodyComponent,
    OrderListPipe,
    ImgBrokenDirective
  ]
})
export class SharedModule { }
