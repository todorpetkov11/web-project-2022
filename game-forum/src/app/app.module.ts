import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesModule } from './feature/pages/pages.module';
import { ThreadsModule } from './feature/threads/threads.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AuthModule,
    ThreadsModule,
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyB1EbYajdv7ewSPE_vpAcgcwpZNnDGaxDM",
      authDomain: "gamepedia-d58ed.firebaseapp.com",
      projectId: "gamepedia-d58ed",
      storageBucket: "gamepedia-d58ed.appspot.com",
      messagingSenderId: "239859075026",
      appId: "1:239859075026:web:888a524626e6e43b032a0b"
    })),
    //TODO: ENV VAR ON CONFIG
    CoreModule,
    PagesModule,
    AppRoutingModule,
    RouterModule,
  ],

  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }
