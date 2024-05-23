import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HeaderUserComponent} from './components/header-user/header-user.component';
import {MediaPlayComponent} from './components/media-play/media-play.component';
import {SideBarComponent} from './components/side-bar/side-bar.component';
import {CardPlayerComponent} from './components/card-player/card-player.component';
import {SectionGenericaComponent} from './components/section-generica/section-generica.component'


@NgModule({
  declarations: [
    HeaderUserComponent,
    MediaPlayComponent,
    SideBarComponent,
    CardPlayerComponent,
    SectionGenericaComponent

  ],
  imports: [
    CommonModule
  ],
  exports:[
    SideBarComponent,
    MediaPlayComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    SectionGenericaComponent
  ]
})
export class SharedModule { }
