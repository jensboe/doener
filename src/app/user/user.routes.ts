import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';
import { RegisterComponent } from './register/register.component';
import { loggedInGuard, loggedOutGuard } from '../auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [loggedOutGuard],
  },
  {
    path: 'detail',
    component: DetailsComponent,
    canActivate: [loggedInGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [loggedOutGuard],
  },
];
