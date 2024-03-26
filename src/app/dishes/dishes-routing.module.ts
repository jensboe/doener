import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [
  {
    path: 'dishes/add',
    component: AddComponent,
    title: 'Add dish'
  },
  {
    path: 'dishes/list',
    component: ListComponent,
    title: 'disch list'
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
export class DishesRoutingModule { }
