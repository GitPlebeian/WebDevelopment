var express = require('express');
var cp = require("dotenv").config();
// var apiKey = require('./apikey.js')
var app = express();

const bodyParser = require('body-parser')
const sgMail = require('@sendgrid/mail');

// sgMail.setApiKey(apiKey());

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set("view engine", "ejs");

app.get("/", function(req,res){
	console.log("Someone connected to home")
	res.render("homepage");
});
app.get("/websites", function(req,res){
	res.render("websites");
});
app.get("/contact", function(req,res){
	res.render("contact");
});
app.post("/contact", function(req,res){
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

app.get("/websites/flower", function(req,res){
	res.render("websites/flower.ejs");
});
app.get("/websites/glass", function(req,res){
	res.render("websites/glass.ejs");
});
app.get("/websites/coffeeShop", function(req,res){
	res.render("websites/coffeeShop");
});




app.listen(5000, function(){
	console.log("Starting Server");
});
