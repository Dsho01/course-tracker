var express = require('express');
var routes = require('./routes');
var app = express();

app.use('/', routes);

app.set('views', process.cwd() + '/views');
app.set('view engine', 'ejs');

app.listen(3000, function() {
    console.log('App listening to port 3000!');
});