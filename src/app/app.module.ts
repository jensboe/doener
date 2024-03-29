import { DEFAULT_CURRENCY_CODE, NgModule, importProvidersFrom, isDevMode } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RestaurantsModule } from './restaurants/restaurants.module';
import { AppRoutingModule } from "./app-routing.module";

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DishesModule } from './dishes/dishes.module';
import { ServiceWorkerModule } from '@angular/service-worker';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RestaurantsModule,
    DishesModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent],
  providers:
    [
      importProvidersFrom(provideFirebaseApp(() => initializeApp({
        "projectId": "doener-96c7a",
        "appId": "1:194409694404:web:22fb20b08a51ab26a53591",
        "storageBucket": "doener-96c7a.appspot.com",
        "apiKey": "AIzaSyAdmhyijYOZsjiX6zzGcZb1CW6SvifyYKU",
        "authDomain": "doener-96c7a.firebaseapp.com",
        "messagingSenderId": "194409694404",
        "measurementId": "G-7EV8PVRVZ8"
      }))),
      importProvidersFrom(provideFirestore(() => getFirestore())),
      provideAnimationsAsync(),
      {
        provide: DEFAULT_CURRENCY_CODE,
        useValue: 'EUR'
      }
    ]
  })
export class AppModule {
}