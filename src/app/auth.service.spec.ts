import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { Auth } from '@angular/fire/auth';

describe('AuthService', () => {
  let service: AuthService;

  const AuthStub = jasmine.createSpyObj('Auth', ['onAuthStateChanged']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: Auth, useValue: AuthStub }]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
