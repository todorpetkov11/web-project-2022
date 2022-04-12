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
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AuthModule,
    ThreadsModule,
    CoreModule,
    PagesModule,
    AppRoutingModule,
    RouterModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyB1EbYajdv7ewSPE_vpAcgcwpZNnDGaxDM",
      authDomain: "gamepedia-d58ed.firebaseapp.com",
      projectId: "gamepedia-d58ed",
      storageBucket: "gamepedia-d58ed.appspot.com",
      messagingSenderId: "239859075026",
      appId: "1:239859075026:web:888a524626e6e43b032a0b"
    }),
    // TODO: ADD TO ENVIRONMENT VARIABLE
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
