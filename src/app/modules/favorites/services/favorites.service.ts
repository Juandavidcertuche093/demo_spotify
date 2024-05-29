import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private readonly URL = environment.api;

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllTracks$(): Observable<any>{
    return this.httpClient.get(`${this.URL}/tracks`)
    .pipe(
      map(({ data }: any) => {
        return data
      })
    )
  }
}
