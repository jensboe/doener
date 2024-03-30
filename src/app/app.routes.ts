import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
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