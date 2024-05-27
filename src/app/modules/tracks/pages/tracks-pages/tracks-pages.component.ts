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
  // 1 forma de hacerlo
  async loadDAtaAll(): Promise<any> {
   this.tracksTrending = await this.trackService.getAllTracks$().toPromise()
       
  }
  // segunda forma de hacerlo
  loadDataRandom(): void {
    this.trackService.getAllRandom$()
      .subscribe((response: TrackModel[]) => {
        this.tracksRandom = response
      }, err => {
        console.log('Error de conexion 💀👻💀👻');        
      })
  }

  ngOnDestroy(): void {
   
  }
}
