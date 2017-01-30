var express = require('express');
var router = express.Router();

//middleware that is used in the router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get('/', function (req, res) {
    res.send('This is my coursework');
});

module.exports = router;