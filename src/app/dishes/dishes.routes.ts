import { Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';

export const routes: Routes = [
  {
    path: 'add',
    component: AddComponent,
    title: 'Add dish'
  },
  {
    path: 'list',
    component: ListComponent,
    title: 'dish list'
  },
];