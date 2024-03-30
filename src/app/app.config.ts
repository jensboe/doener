import { ApplicationConfig, DEFAULT_CURRENCY_CODE, importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ServiceWorkerModule } from '@angular/service-worker';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        importProvidersFrom(ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: !isDevMode(),
            // Register the ServiceWorker as soon as the application is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000'
        })),
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
        importProvidersFrom(provideAuth(() => getAuth())),

        provideAnimationsAsync(),
        {
            provide: DEFAULT_CURRENCY_CODE,
            useValue: 'EUR'
        },]
};
