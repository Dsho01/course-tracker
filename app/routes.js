var express = require('express');
var router = express.Router();
var Courses = require('./models/course');

//middleware that is used in the router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

//get all courses to display 
//TODO: search bar to get courses from Udacity's api
router.get('/api/courses', function(req, res) {
    Courses.find({}, function(err, courses) {
        
        if(err) {
            res.send(err);
        }
        
        //this will be parsed to get all course info
        res.json(courses);
        
    });
});

// TODO: will be used to create cards, first by searching through Udacity's API
router.post('/api/courses', function(req, res) {
    Courses.create({ 
        title: 'small '
    }, function (err, small) {
        
        if(err) {
            
            console.log("database post error!");
            res.send(err);
        }
        res.send("Item saved through post!");
        
    });
});



router.get('/', function (req, res) {
    //res.send('This is my coursework');
    res.render('pages/coursework');
});

module.exports = router;