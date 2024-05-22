import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HeaderUserComponent} from './components/header-user/header-user.component';
import {MediaPlayComponent} from './components/media-play/media-play.component';
import {SideBarComponent} from './components/side-bar/side-bar.component';


@NgModule({
  declarations: [
    HeaderUserComponent,
    MediaPlayComponent,
    SideBarComponent

  ],
  imports: [
    CommonModule
  ],
  exports:[
    SideBarComponent
  ]
})
export class SharedModule { }
