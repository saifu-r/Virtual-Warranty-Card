import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, ReactiveFormsModule, CommonModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  provideFirebaseApp(() => initializeApp({
    apiKey: "AIzaSyCWPVAWLsQdurEBK4xN8A33oh1CJu5LEBE",
    authDomain: "virtual-card-86b61.firebaseapp.com",
    projectId: "virtual-card-86b61",
    storageBucket: "virtual-card-86b61.firebasestorage.app",
    messagingSenderId: "96040981038",
    appId: "1:96040981038:web:b2284fcbc606d2ba3845bf",
    measurementId: "G-3JJRFNKEPQ"
  })),
  provideMessaging(() => getMessaging()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
