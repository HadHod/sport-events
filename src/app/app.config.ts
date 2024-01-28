import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  ScreenTrackingService,
  UserTrackingService,
  getAnalytics,
  provideAnalytics,
} from '@angular/fire/analytics';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'sport-events-go',
          appId: '1:883963380191:web:a125026d057d036afa446a',
          storageBucket: 'sport-events-go.appspot.com',
          apiKey: 'AIzaSyBlac_ohBpBxd_0mOXlfIzRAjFazjBPIEI',
          authDomain: 'sport-events-go.firebaseapp.com',
          messagingSenderId: '883963380191',
          measurementId: 'G-YF14ZPQC0T',
        }),
      ),
    ),
    importProvidersFrom(provideAuth(() => getAuth())),
    importProvidersFrom(provideAnalytics(() => getAnalytics())),
    ScreenTrackingService,
    UserTrackingService,
    importProvidersFrom(provideFirestore(() => getFirestore())),
    importProvidersFrom(provideStorage(() => getStorage())),
  ],
};
