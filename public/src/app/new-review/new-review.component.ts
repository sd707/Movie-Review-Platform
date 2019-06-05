import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import { HttpService } from "../http.service";

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.css']
})
export class NewReviewComponent implements OnInit {
  movie= {name: "", _id: ""};
  newReview = {reviewer: "", rating: "", content: ""};
  myError;
  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.getMovieInfo();
    //this.movie = {name: ""};
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
  addReview(movie_id){
    //this._route.params.subscribe((params: Params)=> {
      console.log("Movie ID:", movie_id);
      let observable = this._httpService.addReview(this.newReview, movie_id);
      observable.subscribe(data => {
        console.log("MY DATA", data);
        if (data['message'] == "Success") {
          console.log("Created a Review", data['message'], data);
          //this._router.navigate(["/movies"]);
          console.log("Adding a review");
          this._router.navigate(["/movies/"+movie_id]);
        } else {
          console.log("this is my error", data['error']);
          this.myError = data['error'];
          //this._router.navigate(["/movies/new"]);
        }
      })
    //})
  }

}
