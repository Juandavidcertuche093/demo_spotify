import { Component, OnDestroy, OnInit } from '@angular/core';
import * as dataRaw from '../../../../data/tracks.json' //es para todo lo que esta en el .traks.json este en (data)
import { TrackModel } from '../../../../core/models/tracks.model';
import { TrackService } from '../../services/track.service';
import { Subscription } from 'rxjs';
import { response } from 'express';

@Component({
  selector: 'app-tracks-pages',  
  templateUrl: './tracks-pages.component.html',
  styleUrl: './tracks-pages.component.css'
})
export class TracksPagesComponent implements OnInit, OnDestroy {

  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []

  listObservers$: Array<Subscription> = []
  
  constructor (
    private trackServive: TrackService
  ) {}

  ngOnInit(): void {
   const observer1$ = this.trackServive.dataTracksTrending$
    .subscribe(response => {
      this.tracksTrending = response
      console.log('Cancion trending ---->',response);
    })

   this.listObservers$ = [observer1$] //para desuscribirse 

  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe())
  }
}
