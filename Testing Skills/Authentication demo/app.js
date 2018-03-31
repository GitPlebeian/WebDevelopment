var express = require('express')

var app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get('/', function(req,res){
  res.render('game')
})

app.listen(5000, function(){
  console.log("Starting server");
})
