import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path: 'restaurants',
        loadChildren: () => import('./restaurants/restaurants.routes').then(mod => mod.routes)
    },
    {
        path: 'dishes',
        loadChildren: () => import('./dishes/dishes.routes').then(mod => mod.routes)
    },
    {
      path:'login',
      component: LoginComponent,
    },
    {
      path:'',
      redirectTo: 'restaurants/list',
      pathMatch: 'full'
    },
    {
      path: '**',
      component: PageNotFoundComponent,
      title: 'App'
    },
  
  ];