import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import {provideHttpClient, withInterceptors, withFetch} from '@angular/common/http' //para hacer el llamado a la Api
import { CookieService } from 'ngx-cookie-service';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { injectSessionInterceptor } from './core/interceptors/inject-session.interceptor';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),
    provideHttpClient(withInterceptors([injectSessionInterceptor]),withFetch()),
    CookieService,
       
  ]
};
