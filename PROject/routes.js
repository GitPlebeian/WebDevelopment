var express = require("express");
var router = express.Router();
var clientSessions = require('client-sessions');
var formidable = require('formidable');
var fs = require('fs');

router.get("/",function(request,response){
	response.sendFile(__dirname + "/public/views/homepage.html");
});
router.get("/login",function(request,response){
	response.sendFile(__dirname + "/public/views/login.html");
});
router.get("/signup",function(request,response){
	response.sendFile(__dirname + "/public/views/signup.html");
});
router.get("/items",function(request,response){
	response.sendFile(__dirname + "/public/views/newItem.html");
});

// Item Database
const dataBase2 = require('./databaseItem');

let db2 = new dataBase2();

router.get("/additem",function(req,res){
	    res.sendFile(__dirname + "/public/views/newItem.html");
});

 	router.post('/additem', function (req, res) {
		console.log(req.body);
		var obj = {name:req.body.name,picture:req.body.picture,
		price:req.body.price,category:req.body.category,description:req.body.description};
				res.json(db2.addObject(obj));
 });





////////////////////////////////////////////////////
const myDatabase = require('./myDatabase');

let db = new myDatabase();



//add or modify.  Use addObject and no need for index.
//                ident should be part of object.
router.get("/userInfo",function(req,res){
	if(!db.infoList[0]){
		req.session_state.reset();
		res.json({anything: "/login"})
	} else{
		console.log("Hey man iasd falsdfkja;ldfkja;sdflkja;dlfkj");
		res.json({username:req.session_state.username, loginState:req.session_state.login});
	}


});

router.get("/logout",function(req,res){
	req.session_state.reset();
	res.redirect('/');
});
router.post('/checklogin', function(req, res){
	for(i=0;i<db.infoList.length;i++){
		if(db.infoList[i].username == req.body.username && db.infoList[i].password == req.body.password){
			console.log("Log in approved");
			req.session_state.login = true;
			req.session_state.username = req.body.username;
			req.session_state.password = req.body.password;
			return res.json({redirect:"/"});
		}
	}
	return res.json(null);
	///let obj = {name:req.body.name, password:req.body.password};
	///res.json(db.addObject(obj));
});
router.post('/signup', function(req, res){
	if (req.body.username == "") {
		res.json(null);
	}
	let obj = {username:req.body.username, password:req.body.password};
	req.session_state.login = true;
	req.session_state.username = req.body.username;
	req.session_state.password = req.body.password;
	res.json(db.addObject(obj));
});


module.exports = router;
