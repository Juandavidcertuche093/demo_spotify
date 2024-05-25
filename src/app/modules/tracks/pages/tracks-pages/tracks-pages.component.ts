import { Component, OnDestroy, OnInit } from '@angular/core';
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
    this.trackServive.getAllTracks$()
    .subscribe(response => {
      console.log('👀👀👀---->',response)
    })
  }

  ngOnDestroy(): void {
   
  }
}
