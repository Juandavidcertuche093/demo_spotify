import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TrackModel } from '../../../core/models/tracks.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environments';


@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly URl = environment.api;

  constructor(
    private httpClient: HttpClient
  ) { }
   
  getAllTracks$(): Observable<any>{
    return this.httpClient.get(`${this.URl}/tracks`)
  }
}
