import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css']
})
export class NewMovieComponent implements OnInit {
  newMovie = {name: "", user: "", content: ""};
  myError;
  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
  }

  addMovie(){
    let observable = this._httpService.createMovie(this.newMovie);
    observable.subscribe(data => {
      console.log("Created a movie", data['message'], data);
      //if (data['message'] == "Success") {
        this._router.navigate(["/movies"]);
      // } else {
      //   this.myError = data['error'].message;
      //   this._router.navigate(["/movies/new"]);
      // }
    })
  }

}
