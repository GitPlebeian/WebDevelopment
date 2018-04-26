// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var mongoose   = require('mongoose')
var Bear       = require('./app/models/bear')

mongoose.connect('mongodb://localhost:27017/myApiTestingProject')
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 5000;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router


router.use(function(req,res,next){
	console.log('Something is happening')
	next()
})

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.route('/bears')

	.post(function(req,res){

		var bear = new Bear()
		bear.name = req.body.name

		bear.save(function(err){
			if(err){
				res.send(err)
			}

			res.json({ message: 'Bear created!'})
		})
	})
	.get(function(req,res) {
		Bear.find(function(err, bears) {
			if(err){
				res.send(err)
			}
			res.json(bears)
		})
	})

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);