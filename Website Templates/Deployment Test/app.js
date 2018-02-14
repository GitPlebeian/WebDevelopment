var express = require('express');
app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req,res){
	res.render("homepage");
});

app.listen(3000, function(){
	console.log("Starting Server");
});
