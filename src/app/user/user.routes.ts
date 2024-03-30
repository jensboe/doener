import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'detail',
    component: DetailsComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];