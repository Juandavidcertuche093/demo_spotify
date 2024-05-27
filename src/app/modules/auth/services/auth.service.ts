import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environments';
import { Observable, tap } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL = environment.api

  constructor(
    private http: HttpClient,
    private cookie: CookieService
  ) { }

  sendCredentials(email: string, password: string): Observable<any> {
    const body = {
      email,
      password
    }
   return this.http.post(`${this.URL}/auth/login`, body)
   .pipe(
    tap((responseOK: any) => {
      const { tokenSession, data} = responseOK
      this.cookie.set('token_service', tokenSession, 4, '/')
    })
   )
  }
}

// todo observable para que funcione tenemos que suscrivirnos