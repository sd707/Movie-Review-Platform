var mongoose = require('mongoose');
var Movie = mongoose.model("Movie");
var Review = mongoose.model("Review");

module.exports = {
    showAll: function(req, res){
        Movie.find({}, function(err, movies){
            if(err){
                res.json({message: "Error", error: err});
            } else {
                res.json({message:"Success", movie: movies});
            }
        })
    },
    showOne: function(req, res){
        let id = req.params.id;
        Movie.findOne({_id: id}, function(err, movie){
            if(err){
                res.json({message: "Error", error: err});
            } else {
                res.json({message:"Success", movie: movie,});
            }
        })
    },
    createMovie: function(req, res){
        Movie.create({name: req.body.name, user: req.body.user}, function(err, movie){
            console.log(req.body);
            if(err){
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success", added: true});
            }
        });
        Review.create({reviewer: req.body.user, rating: req.body.rating, content: req.body.content}, function(err, newReview){
            //console.log("im here bitches");
            if(err){
                //console.error("its an error");
                res.json({message:"Error", error: err});
            } else {
                //console.log("not an error");
                Movie.findOneAndUpdate({name: req.body.name}, {$push: {reviews: newReview}}, function(err, data){
                    if(err){
                        console.error("error with assignment");
                        res.json({message:"Error assigning review to movie", error:err});
                    } else {
                        console.log("somewhat made it");
                        res.json({message:"Success assigning review to movie", added: true});
                    }
                })
            }
        })
    },
    addReview: function(req,res){
        Review.create({reviewer: req.body.reviewer, rating: req.body.rating, content: req.body.content}, function(err, newReview){
            //console.log("im here bitches");
            if(err){
                //console.error("its an error");
                res.json({message:"Error", error: err});
            } else {
                //console.log("not an error");
                Movie.findOneAndUpdate({_id: req.params.movieId}, {$push: {reviews: newReview}}, function(err, data){
                    if(err){
                        console.error("error with assignment");
                        res.json({message:"Error", error:err});
                    } else {
                        console.log("somewhat made it");
                        res.json({message:"Success", added: true});
                    }
                })
            }
        })
    },
    destroyMovie: function(req,res){
        let id = req.params.id;
        Movie.remove({_id: id}, function(err, movie){
            if(err){
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success deleting movie", data: movie});
            }
        })
    }
}