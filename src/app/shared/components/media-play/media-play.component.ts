import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '../../../core/models/tracks.model';
import { MultimediaService } from '../../services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-play', 
  templateUrl: './media-play.component.html',
  styleUrl: './media-play.component.css'
})
export class MediaPlayComponent implements OnInit, OnDestroy {
  mockCover: TrackModel = {
    cover: 'https://www.adslzone.net/app/uploads-adslzone.net/2023/01/canciones-mas-usadas-reels.jpg?x=480&y=375&quality=40',
    album: 'Gioli & assia',
    name: 'BEBE (Oficial)',
    url: 'http:/localhost/track.mp3',
    _id: '1'
  }

  listObservers$: Array<Subscription> = []

  constructor (
    private multimediaService: MultimediaService
  ) {}

  ngOnInit(): void {
    const observe1$: Subscription = this.multimediaService.callback.subscribe(
      (response: TrackModel) => {
        console.log('🎵🎶Recibiendo cancion......', response);
      }
    )
    this.listObservers$ = [observe1$]
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe())
    //console.log('💣💣💣💣 BOOOM!')
  }

}
