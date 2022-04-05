import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './feature/pages/about-page/about-page.component';
import { HomePageComponent } from './feature/pages/home-page/home-page.component';
import { PageNotFoundComponent } from './feature/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },

  {
    path: 'home',
    component: HomePageComponent,
    data: { animation: 'homePage' }
  },

  {
    path: 'about',
    component: AboutPageComponent
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
