import { Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MediaPlayComponent } from '../../../../shared/components/media-play/media-play.component';
import { SideBarComponent } from '../../../../shared/components/side-bar/side-bar.component';

@Component({
    selector: 'app-home-pages',
    templateUrl: './home-pages.component.html',
    styleUrl: './home-pages.component.css',
    standalone: true,
    imports: [SideBarComponent, MediaPlayComponent, RouterOutlet]
})
export class HomePagesComponent implements OnInit {

  constructor () {}

  ngOnInit(): void {
    
  }
}
