import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private readonly URL = environment.api;

  constructor(
    private httpCleint: HttpClient
  ) { }

  searchTracks$(term: string): Observable<any> {
    return this.httpCleint.get(`${this.URL}/tracks?src=${term}`)
    .pipe(
      map((dataRaw: any) => dataRaw.data)
    )
  }
}

//pipe en esta caso nos ayuda con problemas de performance cuando el internet esta lento