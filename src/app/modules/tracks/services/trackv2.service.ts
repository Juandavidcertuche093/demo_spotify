import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators'
import { environment } from '../../../../environments/environments';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TrackModel } from '../../../core/models/tracks.model';
import { CookieService } from 'ngx-cookie-service';

const URL = environment.api

/**
 * Function Http Inject => nueva forma de usarla
 * @returns 
 */
export const getAllTracks$ = (): Observable<any> => {  
  return inject(HttpClient).get(`${URL}/tracks`)
  .pipe(
    map(({ data }: any) => {//ransforma la respuesta de la petición HTTP para que el Observable emita directamente el contenido de data
      return data
    })
  )
}

//sirve para filtrar una lista de pistas (tracks) eliminando un elemento específico identificado por su ID.
export const skipById = (listTracks: TrackModel[], id: number): Promise<TrackModel []> => {
  return new Promise((resolve, rejects) => {
    const listTemp = listTracks.filter(a => a._id !== id)
    resolve(listTemp)
  })
}

export const getAllRandom$ = (): Observable<any> => {
  return inject(HttpClient).get(`${URL}/tracks`)
  .pipe(
    mergeMap(({ data }: any) => skipById(data, 1)),      
      catchError((err) => {
      const { status, statusText} = err;
      console.log('Algo paso revisame sin conexion 🚨🚨', [status, statusText]);
      // se colocaria otro servicio en esta parte en caso de error de un tercero para hacer trasavilidad de errores
      return of([])
    })
  )
}

export const getCurrentUser = ():string => {
  const cookieService = inject(CookieService)
  return cookieService.get('token')
}