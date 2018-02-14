var http = require('http')
function requestHandler(req,res){
  console.log("In comes a request to: " + req.url);
  if(req.url === '/'){
    res.end('Welcome to the home page')
  } else if(req.erl === '/about'){
    res.send("Welcome to the about page")
  } else {
    res.end('Error! File not found')
  }
}
var server = http.createServer(requestHandler)
server.listen(3000)
