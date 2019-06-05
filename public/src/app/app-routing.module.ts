import {MoviesComponent} from "./movies/movies.component";
import {ReviewsComponent} from "./reviews/reviews.component";
import {NewMovieComponent} from "./new-movie/new-movie.component";
import {NewReviewComponent} from "./new-review/new-review.component";

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'movies', component: MoviesComponent},
  {path: 'movies/new', component: NewMovieComponent},
  {path: 'movies/:id', component: ReviewsComponent},
  {path: 'movies/:id/review', component: NewReviewComponent},
  {path: '', pathMatch: 'full', redirectTo: '/movies'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
