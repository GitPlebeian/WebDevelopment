var express = require('express');
app = express();
const bodyParser = require('body-parser')
const sgMail = require('@sendgrid/mail');

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set("view engine", "ejs");

app.get("/", function(req,res){
	console.log("Someone Connected")
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
	// const msg = {
	// to: 'jaxtubbs@gmail.com',
	// from: '' + req.body.email,
	// subject: '' + req.body.subject,
	// text: '' + req.body.message,
	// html: '<p>' + req.body.message + '</p>',
	// };
	// sgMail.send(msg);
	res.redirect('/');
});
app.get("/websites/flower", function(req,res){
	res.render("websites/flower.ejs");
});
app.get("/websites/glass", function(req,res){
	res.render("websites/glass.ejs");
});
app.get("/websites/photography", function(req,res){
	res.render("websites/photography.ejs");
});



app.listen(5000, function(){
	console.log("Starting Server");
});
