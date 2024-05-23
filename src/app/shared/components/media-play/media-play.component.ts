import { Component, OnInit } from '@angular/core';
import { TrackModel } from '../../../core/models/tracks.model';

@Component({
  selector: 'app-media-play', 
  templateUrl: './media-play.component.html',
  styleUrl: './media-play.component.css'
})
export class MediaPlayComponent implements OnInit {
  mockCover: TrackModel = {
    cover: 'https://www.adslzone.net/app/uploads-adslzone.net/2023/01/canciones-mas-usadas-reels.jpg?x=480&y=375&quality=40',
    album: 'Gioli & assia',
    name: 'BEBE (Oficial)',
    url: 'http:/localhost/track.mp3',
    _id: '1'
  }
  constructor () {}

  ngOnInit(): void {
    
  }

}
