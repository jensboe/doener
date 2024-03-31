import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';

export const loggedInGuard: CanActivateFn = () => {
  const auth = inject(AuthService)
  return auth.loggedIn$;
};
export const loggedOutGuard: CanActivateFn = () => {
  const auth = inject(AuthService)
  return auth.loggedOut$;
};
