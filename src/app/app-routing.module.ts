import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
      path: 'app',
      component: AppComponent,
      title: 'App'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
    {
      enableTracing: true, // <-- debugging purposes only
    }
  )
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
