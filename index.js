var express = require('express');
var routes = require('./app/routes');
var db = require('./config/db');
var mongoose = require('mongoose');
var app = express();

app.use(express.static(__dirname + '/public/'));

app.use('/', routes);

app.set('views', process.cwd() + '/public');
app.set('view engine', 'ejs');

app.listen(3000, function() {
    console.log('App listening to port 3000!');
});

mongoose.connect(db.url, function(error) {
    //TODO: send to 404 page when database connection cannot be established
    if(error) {
        //Here so program does not crash
        console.log("Caught Error: Database connection has failed!");
    } else {
        console.log("Connection established to database!");
    }
});