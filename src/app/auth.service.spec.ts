import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { Auth } from '@angular/fire/auth';
import { of } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;

  const AuthStub = {
    onAuthStateChanged: () => of(true),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: Auth, useValue: AuthStub }],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('logIn/logOut', () => {
    it('should init with logged in', () => {
      service.loggedIn$.subscribe((value) => {
        expect(value).toBeFalse();
      });
      service.loggedOut$.subscribe((value) => {
        expect(value).toBeTrue();
      });
    });
  });

  describe('getUser', () => {
    it('should return undefined user', () => {
      expect(service.currentUser).toBeUndefined();
    });
  });
});
