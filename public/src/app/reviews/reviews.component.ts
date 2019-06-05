import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from "@angular/router";
import { HttpService } from "../http.service";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  movie = {name: ""} ;
  constructor(private _httpService: HttpService,private _router: Router,private _route: ActivatedRoute) { }

  ngOnInit() {
    this.getMovieInfo();
  }
  getMovieInfo(){
    this._route.params.subscribe((params: Params)=>{
      console.log(params['id']);
      let observable = this._httpService.getMovieById(params['id']);
      observable.subscribe(data=>{
        console.log("Getting a movie", data);
        this.movie = data["movie"];
      })
    })
  }
  deleteMovie(movie){
    let observable = this._httpService.deleteMovie(movie);
    observable.subscribe(data=>{
      console.log("Deleting this movie", data);
      this._router.navigate(["/movies"]);
    })
  }

}
