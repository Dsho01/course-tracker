var express = require('express');
var routes = require('./app/routes');
var app = express();

app.use(express.static(__dirname + '/public/css'));

app.use('/', routes);

app.set('views', process.cwd() + '/public');
app.set('view engine', 'ejs');

app.listen(3000, function() {
    console.log('App listening to port 3000!');
});