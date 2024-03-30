import { Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';

export const routes: Routes = [
  {
    path: 'dishes/add',
    component: AddComponent,
    title: 'Add dish'
  },
  {
    path: 'dishes/list',
    component: ListComponent,
    title: 'dish list'
  },
  {
    path: 'restaurants',
    redirectTo: 'restaurants/list'
  }
];