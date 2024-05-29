import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environments';
import {map, mergeMap, tap, catchError} from 'rxjs/operators'
import { TrackModel } from '../../../core/models/tracks.model';



@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly URl = environment.api;

  constructor(
    private httpClient: HttpClient
  ) { }
   
  /**
   * En resumen, esta función es útil para filtrar una lista de pistas, 
   * excluyendo aquella cuyo ID coincide con un ID dado
   */
  private skipById(listTracks: TrackModel[], id: number): Promise<TrackModel []> {
    return new Promise((resolve, rejects) => {
      const listTemp = listTracks.filter(a => a._id !== id)
      resolve(listTemp)
    })
  }

  getAllTracks$(): Observable<any>{
    return this.httpClient.get(`${this.URl}/tracks`)
    .pipe(
      map(({ data }: any) => {//ransforma la respuesta de la petición HTTP para que el Observable emita directamente el contenido de data
        return data
      })
    )
  }
  /**
   * 
   * @returns Devolver las canciones random
   */
  getAllRandom$(): Observable<any>{
    return this.httpClient.get(`${this.URl}/tracks`)
    .pipe(
      mergeMap(({ data }: any) => this.skipById(data, 1)),      
      /*map((dataRaw) => { //aplicar un filter comun de array
        return dataRaw.filter((track: TrackModel) => track._id !== 1)
      })*/
      catchError((err) => {
        const { status, statusText} = err;
        console.log('Algo paso revisame sin conexion 🚨🚨', [status, statusText]);
        // se colocaria otro servicio en esta parte en caso de error de un tercero para hacer trasavilidad de errores
        return of([])
      })
    )
  }
}
