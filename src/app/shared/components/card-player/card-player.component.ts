import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '../../../core/models/tracks.model';
import { MultimediaService } from '../../services/multimedia.service';
import { ImgBrokenDirective } from '../../directives/img-broken.directive';
import { NgIf, NgClass } from '@angular/common';

@Component({
    selector: 'app-card-player',
    templateUrl: './card-player.component.html',
    styleUrl: './card-player.component.css',
    standalone: true,
    imports: [NgIf, NgClass, ImgBrokenDirective]
})
export class CardPlayerComponent implements OnInit {

  @Input({required: true}) mode: 'small' | 'big' = 'small'
  @Input({required: true, alias:'trackObject'}) track: TrackModel = {_id: 0, name: '', album: '', url: '', cover: '' };

  constructor (
    private multimediaService: MultimediaService
  ) {}

  ngOnInit(): void {
    
  }

  sendPlay(track: TrackModel): void {
    this.multimediaService.trackInfo$.next(track)
  }

}
