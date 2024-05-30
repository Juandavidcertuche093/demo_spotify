import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SessionGuard } from './session.guard';

describe('Testing of Session Guard 👍', () => {
  let guard: SessionGuard;
  let cookieService: CookieService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [SessionGuard, CookieService]
    });

    guard = TestBed.inject(SessionGuard);
    cookieService = TestBed.inject(CookieService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow activation if the cookie is present', () => {
    spyOn(cookieService, 'check').and.returnValue(true);
    const route = {} as ActivatedRouteSnapshot;
    const state = {} as RouterStateSnapshot;
    expect(guard.canActivate(route, state)).toBeTrue();
  });

  it('should navigate to auth if the cookie is absent', () => {
    spyOn(cookieService, 'check').and.returnValue(false);
    const navigateSpy = spyOn(router, 'navigate');
    const route = {} as ActivatedRouteSnapshot;
    const state = {} as RouterStateSnapshot;
    guard.canActivate(route, state);
    expect(navigateSpy).toHaveBeenCalledWith(['/', 'auth']);
  });
});



