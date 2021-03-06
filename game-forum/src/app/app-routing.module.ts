import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './feature/pages/about-page/about-page.component';
import { HomePageComponent } from './feature/pages/home-page/home-page.component';
import { PageNotFoundComponent } from './feature/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'threads'
  },

  {
    path: 'home',
    pathMatch: 'full',
    redirectTo: 'threads'
  },

  {
    path: 'threads',
    component: HomePageComponent,
    data: { animation: 'threadsPage' },
  },

  {
    path: 'about',
    component: AboutPageComponent,
    data: { animation: 'aboutPage' }
  },

  {
    path: '**',
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

