import { HttpRequest, HttpHandlerFn, HttpEvent, HttpInterceptorFn } from '@angular/common/http';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

export const injectSessionInterceptor: HttpInterceptorFn = (request: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  const cookieService = inject(CookieService);
  try {
    const token = cookieService.get('token');
    const newRequest = request.clone({
      setHeaders: {
        authorization: `Bearer ${token}`,
        VERSION_ANGULAR: '17'
      }
    });

    return next(newRequest);
  } catch (e) {
    console.log('🔴🔴🔴 Ojito error', e);
    return next(request);
  }
};
