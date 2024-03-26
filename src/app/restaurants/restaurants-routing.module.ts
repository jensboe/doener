import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
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

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantsRoutingModule { }
