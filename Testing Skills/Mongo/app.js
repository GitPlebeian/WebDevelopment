var express = require('express');
var app = express();

var databaseName = 'mongoTest1'
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/' + databaseName);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('Connected to database: ' + databaseName)

	var kittySchema = mongoose.Schema({
		name: String
	});

	kittySchema.methods.speak = function() {
		var greeting = ''
		if (this.name) {
			greeting = 'Hi my name is ' + this.name
		} else {
			greeting = 'I dont have a name'
		}
	}

	var Kitten = mongoose.model('Kitten', kittySchema);

	var silence = new Kitten({
		name: 'taco'
	});

	silence.save(function(err, silence) {
		if (err) return console.error(err);
		silence.speak();
	});

	Kitten.find(function(err, kittens) {
		if (err) return console.error(err);
		console.log(kittens);
	})

	Kitten.find({
		name: /^Silence/
	}, function(err, data) {
		if (err) {
			console.log(err)
		}
		console.log(data)
	});
});

app.use(express.static('public'))
app.set("view engine", "ejs")

app.get("/", function(req, res) {
	res.render("homepage");
});

app.listen(5000, function() {
	console.log("Starting Server");
});