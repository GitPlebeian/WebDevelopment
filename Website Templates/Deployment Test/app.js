var express = require('express');
app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req,res){
	res.render("homepage");
});
app.get("/websites", function(req,res){
	res.render("websites");
});
app.get("/contact", function(req,res){
	res.render("contact");
});
app.get("/about", function(req,res){
	res.render("about");
});

app.listen(process.env.PORT || 5000, function(){
	console.log("Starting Server");
});
