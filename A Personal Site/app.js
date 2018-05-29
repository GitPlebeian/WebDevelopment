var express = require('express');
var cp = require("dotenv").config();
// var apiKey = require('./apikey.js')
var app = express();

const bodyParser = require('body-parser')
const sgMail = require('@sendgrid/mail');

// sgMail.setApiKey(apiKey());

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.set("view engine", "ejs");

app.get("/", function(req, res) {
	console.log("Someone connected to home")
	res.render("homepage");
});

app.get("/traffic", function(req, res) {
	if (req.body.password == '1234') {
		res.render('admin');
	}
	res.render('admin');
});
app.get('/trafficData', function(req, res) {
	res.send('asdfgh')
})

app.get("/skills", function(req, res) {
	res.render("skills");
});
app.get("/contact", function(req, res) {
	res.render("contact");
});
app.get("/services", function(req, res) {
	res.render("services");
});
app.post("/contact", function(req, res) {
	console.log("Sending Email");
	const msg = {
		to: 'jaxtubbs@gmail.com',
		from: '' + req.body.email,
		subject: '' + req.body.subject,
		text: '' + req.body.message,
		html: '<p>' + req.body.message + '</p>',
	};
	sgMail.send(msg);
	res.redirect('/');
});

app.listen(5000, function() {
	console.log("Starting Server");
});