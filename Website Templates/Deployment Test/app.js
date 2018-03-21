var express = require('express');
app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req,res){
	console.log("Someone Connected")
	res.render("homepage");
});
app.get("/websites", function(req,res){
	res.render("websites");
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
