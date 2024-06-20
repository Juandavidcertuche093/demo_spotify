import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { TrackModel } from '../../../../core/models/tracks.model';
import { Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { PlayListBodyComponent } from '../../../../shared/components/play-list-body/play-list-body.component';
import { SearchComponent } from '../../components/search/search.component';

@Component({
    selector: 'app-history-pages',
    templateUrl: './history-pages.component.html',
    styleUrl: './history-pages.component.css',
    standalone: true,
    imports: [SearchComponent, PlayListBodyComponent, AsyncPipe]
})
export class HistoryPagesComponent implements OnInit {

  listResult$: Observable<any> = of([])

  constructor(
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    
  }

  receiveData(event: string): void {
    //agarras el termino y sabes que se ejecuta cuando tiene 3 caracteres
    //console.log('estoy en el compoenente padre 🎮💀🦇', event);
    this.listResult$ = this.searchService.searchTracks$(event)
   
  }
}
