import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {MoviesPageComponent} from "./movies-page/movies-page.component";
import {SeriesPageComponent} from "./series-page/series-page.component";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'movies', component: MoviesPageComponent},
  {path: 'series', component: SeriesPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
