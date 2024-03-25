import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(provideFirebaseApp(() => initializeApp({
      "projectId":"doener-96c7a",
      "appId":"1:194409694404:web:22fb20b08a51ab26a53591",
      "storageBucket":"doener-96c7a.appspot.com",
      "apiKey":"AIzaSyAdmhyijYOZsjiX6zzGcZb1CW6SvifyYKU",
      "authDomain":"doener-96c7a.firebaseapp.com",
      "messagingSenderId":"194409694404",
      "measurementId":"G-7EV8PVRVZ8"
    }))),
  importProvidersFrom(provideFirestore(() => getFirestore()))]
};
