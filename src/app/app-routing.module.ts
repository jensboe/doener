import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  {
      path: '**',
      component: PageNotFoundComponent,
      title: 'App'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
    {
      enableTracing: false, // <-- debugging purposes only
    }
  )
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
