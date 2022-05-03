import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { RouterModule } from '@angular/router';
import { ThreadsModule } from '../threads/threads.module';



@NgModule({
  declarations: [
    HomePageComponent,
    PageNotFoundComponent,
    AboutPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ThreadsModule,
    SharedModule
  ]
})
export class PagesModule { }
