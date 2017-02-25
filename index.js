var express = require('express');
var routes = require('./app/routes');
var db = require('./config/db');
var mongoose = require('mongoose');
var app = express();

// TODO: use npm as only package manager, delete bower
app.use(express.static(__dirname + '/public/'));

app.use('/', routes);

app.set('views', process.cwd() + '/public');
app.set('view engine', 'ejs');

app.listen(3000, function() {
    console.log('App listening to port 3000!');
});

// TODO: Delete this line
if(db.user && db.pw) {
    console.log("Username and password detected");
    db.url = 'mongodb://' + db.user + ':' + db.pw + '@ds157549.mlab.com:57549/coursesu';
} else {
    console.log("No username or password detected");
}

mongoose.connect(db.url, function(error) {
    //TODO: send to 404 page when database connection cannot be established
    if(error) {
        //Here so program does not crash
        console.log("Caught Error: Database connection has failed!");
    } else {
        console.log("Connection established to database!" + db.url);
    }
});