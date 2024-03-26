import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RestaurantsModule } from './restaurants/restaurants.module';
import { AppRoutingModule } from "./app-routing.module";

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


@NgModule({
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      RestaurantsModule,
      AppRoutingModule
    ],
    declarations: [
      AppComponent,
    ],
    bootstrap: [ AppComponent ],
    providers:
    [
        importProvidersFrom(provideFirebaseApp(() => initializeApp({
          "projectId":"doener-96c7a",
          "appId":"1:194409694404:web:22fb20b08a51ab26a53591",
          "storageBucket":"doener-96c7a.appspot.com",
          "apiKey":"AIzaSyAdmhyijYOZsjiX6zzGcZb1CW6SvifyYKU",
          "authDomain":"doener-96c7a.firebaseapp.com",
          "messagingSenderId":"194409694404",
          "measurementId":"G-7EV8PVRVZ8"
        }))),
        importProvidersFrom(provideFirestore(() => getFirestore())),
        provideAnimationsAsync(),
    ]
  })
  export class AppModule {
  }