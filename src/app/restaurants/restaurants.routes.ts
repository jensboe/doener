import { Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';

export const routes: Routes = [
  {
    path: 'restaurants/add',
    component: AddComponent,
    title: 'Add restaurant'
  },
  {
    path: 'restaurants/list',
    component: ListComponent,
    title: 'Restaurant list'
  },
  {
    path: 'restaurants',
    redirectTo: 'restaurants/list'
  }
];