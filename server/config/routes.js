var movies = require('../controllers/movies');
var path = require('path');

module.exports = function(app){
    app.get("/api/movies", movies.showAll);
    app.get("/api/movies/:id", movies.showOne);
    app.post("/api/movies/new", movies.createMovie);
    app.post("/api/movies/:movieId/review", movies.addReview);
    app.delete("/api/movies/:id/delete", movies.destroyMovie);

    // this route will be triggered if any of the routes above did not match
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
};