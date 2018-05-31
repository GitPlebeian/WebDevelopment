var express = require('express')
var mongoose = require('mongoose')
var passport = require('passport')
var bodyParser = require('body-parser')
var LocalStrategy = require('passport-local')
var passportLocalMongoose = require('passport-local-mongoose')
var User = require('./models/user')

var databaseName = 'poker'
mongoose.connect('mongodb://pokerBackend:Proverbs12@ds054619.mlab.com:54619/poker');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('Connected to database: ' + databaseName)
})

var app = express()
app.use(bodyParser.urlencoded({
	extended: true
}))
app.use(require('express-session')({
	secret: 'The bacon is not your friend',
	resave: false,
	saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.set('view engine', 'ejs')
app.use(express.static("public"));

passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

var kittySchema = mongoose.Schema({
	name: String,
	is: 0
});

var Kitten = mongoose.model('Kitten', kittySchema);

// Kitten.find(function(err, kittens) {
// 	if (err) return console.error(err);
// 	console.log(kittens);
// })

// Kitten.find({
// 	name: /^Silence/
// }, function(err, data) {
// 	if (err) {
// 		console.log(err)
// 	}
// 	console.log(data)
// });
app.get('/', function(req, res) {
	res.render('dashboard')
})
app.get('/potOdds', function(req, res) {
	res.render('potOdds')
})

app.get('/school', function(req, res) {
	res.render('school')
})
app.post('/school', function(req, res) {
	console.log('Subbmiting to databases')
	var silence = new Kitten({
		name: req.body.name,
		id: req.body.pos
	});
	silence.save(function(err, silence) {
		if (err) return console.error(err);
	});
})
app.get('/school2', function(req, res) {
	Kitten.find(function(err, kittens) {
		if (err) return console.error(err);
		console.log(kittens);
	})
})

app.get('/secret', isLoggedIn, function(req, res) {
	res.render('secret')
})

app.get('/login', function(req, res) {
	res.render('login')
})
app.post('/login', passport.authenticate('local', {
		successRedirect: '/secret',
		failureRedirect: '/login'
	}),
	function(req, res) {

	}
)
app.get('/register', function(req, res) {
	res.render('register')
})
app.post('/register', function(req, res) {
	req.body.username
	req.body.password
	User.register(new User({
		username: req.body.username
	}), req.body.password, function(err, user) {
		if (err) {
			console.log(err)
			return res.render('register')
		}
		passport.authenticate('local')(req, res, function() {
			res.redirect('/secret')
		})
	})
})

app.get('/logout', function(req, res) {
	req.logout()
	res.redirect('/')
})

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) {
		return next()
	}
	res.redirect('/login')
}

app.listen(5000, function() {
	console.log("Starting Server");
});