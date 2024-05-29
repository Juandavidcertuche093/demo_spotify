import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrackModel } from '../../../../core/models/tracks.model';
import { FavoritesService } from '../../services/favorites.service';
import { Subscription } from 'rxjs';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-favorite-pages',  
  templateUrl: './favorite-pages.component.html',
  styleUrl: './favorite-pages.component.css'
})
export class FavoritePagesComponent implements OnInit, OnDestroy {

  listTracks: Array<TrackModel> = []

  listObservers$: Array<Subscription> = []

  constructor (
    private favoriteService: FavoritesService
  ) {}

  ngOnInit(): void {
    this.loadDataALL()
  }

  loadDataALL(): void {
    const subscription = this.favoriteService.getAllTracks$()
    .subscribe((response: TrackModel[]) => {
      this.listTracks = response
    }, err => {
      console.log('Error de conexion 🛑🛑🛑')
    });
    this.listObservers$.push(subscription)// Para manejo de cancelación
  }
  
  ngOnDestroy(): void {
  //console.log('Cancelando suscripciones...'); Cancelar todas las suscripciones
   this.listObservers$.forEach(sub => {
    sub.unsubscribe();
    //console.log('Suscripción cancelada:', sub);
   });
  }
}
