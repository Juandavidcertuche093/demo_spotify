import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { AuthService } from './auth.service';
import * as mockRaw from '../../../data/user.json'
import { of } from 'rxjs';
import { response } from 'express';

describe('AuthService', () => {
  let service: AuthService;
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule ],
      providers: [AuthService]
    });
    
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
