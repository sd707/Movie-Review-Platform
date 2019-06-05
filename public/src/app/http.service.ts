import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getMovies(){
    return this._http.get("/api/movies");
  }
  getMovieById(id){
    return this._http.get("/api/movies/"+id);
  }
  createMovie(movie){
    return this._http.post("/api/movies/new", movie);
  }
  addReview(newReview, movieId){
    console.log("Your new review", newReview);
    return this._http.post("/api/movies/"+movieId+"/review", newReview);
    console.log("Wudduuup I added a review");
  }
  deleteMovie(movie){
    return this._http.delete("/api/movies/"+movie._id+"/delete", movie);
  }
}
