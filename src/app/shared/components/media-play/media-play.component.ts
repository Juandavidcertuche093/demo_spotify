import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-play', 
  templateUrl: './media-play.component.html',
  styleUrl: './media-play.component.css'
})
export class MediaPlayComponent implements OnInit {
  mockCover: any = {
    cover: 'https://www.adslzone.net/app/uploads-adslzone.net/2023/01/canciones-mas-usadas-reels.jpg?x=480&y=375&quality=40',
    album: 'Gioli & assia',
    name: 'BEBE (Oficial)'
  }
  constructor () {}

  ngOnInit(): void {
    
  }

}
