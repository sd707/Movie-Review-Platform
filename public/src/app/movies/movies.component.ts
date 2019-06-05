import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies = [];
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAllMovies();
  }
  getAllMovies(){
    let observable = this._httpService.getMovies();
    observable.subscribe(data => {
      console.log("Getting all movies", data);
      this.movies = data["movie"];
    })
  }

}
