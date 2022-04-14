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
import { HttpClientModule } from '@angular/common/http'



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AuthModule,
    ThreadsModule,
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
