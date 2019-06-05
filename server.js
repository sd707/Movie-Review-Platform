//Imports
var express = require('express');
var mongoose = require('mongoose');
const bodyParser = require('body-parser');

var app = express();

//Config
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));
//app.set('views', path.join(__dirname, './views')); //NO CLIENT SIDE VIEWS BEING USED

//Database
mongoose.Promise = global.Promise; //MAYBE REMOVE ??
require('./server/config/mongoose.js');

//Routes
require('./server/config/routes.js')(app);

//Port
app.listen(8080, function(){
    console.log("Listening on port 8080");
});