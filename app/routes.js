var express = require('express');
var router = express.Router();
var Courses = require('./models/course');
var https = require('https');

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

/** Route to get Udacity Couses (not used for time being) **/
// TODO: Cache udacityCourses variable to hit Udacity API only once a week
// TODO: Why does udacityCourses variable become undefined after request.end() ?
var options = {
  host: 'www.udacity.com',
  path: '/public-api/v0/courses'
};

//variable to hold all of Udacity course JSON
var udacityCourses;

router.get('/api/udacity', function(req, res) {
    
    var request = https.request(options, function(response) {
        console.log("Making call to get Udacity course list");
        
        var dataReceived = '';
        
        // When receiving data
        response.on('data', function(d) {
            dataReceived += d; 
        });
        
        // Everything went fine and data stream has ended
        response.on('end', function() {
            var jsonRes = JSON.parse(dataReceived);
            udacityCourses = jsonRes.courses;
            
            for(var i = 0; i < udacityCourses.length; i++) {
                console.log("Course Title: " + udacityCourses[i].title);
            }
            
            //console.log("\nHere is the full data of just one course:\n" + JSON.stringify(udacityCourses[1], null, 2));
            
            console.log("\nDone with http request to Udacity API.");
        });
        
        // Something went wrong when retrieving data
        response.on('error', function(e) {
            console.log("Something went wrong in retrieving courses from Udacity API: " + e);
        });
        
    });
    
    request.end();
    
    res.send("Done with fetching courses: " + udacityCourses); // always undefined but not within http callback ?
});


router.get('/*', function (req, res) {
    //res.send('This is my coursework');
    res.render('pages/coursework');
});

module.exports = router;