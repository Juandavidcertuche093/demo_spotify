import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { TrackModel } from '../../../../core/models/tracks.model';
import { Subscription } from 'rxjs';
import { SectionGenericaComponent } from '../../../../shared/components/section-generica/section-generica.component';
import { getAllRandom$, getAllTracks$, getCurrentUser } from '../../services/trackv2.service';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-tracks-pages',
    templateUrl: './tracks-pages.component.html',
    styleUrl: './tracks-pages.component.css',
    standalone: true,
    imports: [SectionGenericaComponent, CommonModule]
})
export class TracksPagesComponent  {
  @Input() currentUser: any;

  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []
  listObservers$: Array<Subscription> = []
  
 
  constructor(){

    getAllTracks$()
    .subscribe((response) => {
      this.tracksTrending = response;
    });

    getAllRandom$()
    .subscribe((response: TrackModel[]) => {
      this.tracksRandom = response
    })
  }  
}
