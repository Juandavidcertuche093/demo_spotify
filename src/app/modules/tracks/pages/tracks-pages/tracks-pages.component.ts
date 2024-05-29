import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '../../../../core/models/tracks.model';
import { TrackService } from '../../services/track.service';
import { Subscription } from 'rxjs';


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
    private trackService: TrackService
  ) {}

  ngOnInit(): void {
    this.loadDAtaAll()
    this.loadDataRandom()
  }
  // 1 forma de hacerlo con una promesa
  async loadDAtaAll(): Promise<any> {
    try {
      this.tracksTrending = await this.trackService.getAllTracks$().toPromise();       
    } catch (error) {
      console.error('Error en la conexion: 🛑🛑🛑', error);
    } 
  }
  // segunda forma de hacerlo con un subscribe
  loadDataRandom(): void {
    this.trackService.getAllRandom$()
      .subscribe((response: TrackModel[]) => {
        this.tracksRandom = response
      }, err => {
        console.log('Error de conexion 🛑🛑🛑');        
      })
  }

  ngOnDestroy(): void {
   
  }
}
