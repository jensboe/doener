import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { loggedInGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: 'restaurants',
    loadChildren: () => import('./restaurants/restaurants.routes').then(mod => mod.routes),
  },
  {
    path: 'dishes',
    loadChildren: () => import('./dishes/dishes.routes').then(mod => mod.routes),
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.routes').then(mod => mod.routes)
  },
  {
    path: '',
    redirectTo: 'restaurants/list',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    title: 'App'
  },

];