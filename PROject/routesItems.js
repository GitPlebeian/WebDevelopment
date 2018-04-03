var express = require("express");
var router = express.Router();
var formidable = require('formidable');
var fs = require('fs');

var data = require('./databaseItem')

let db = new data();

router.get("/",function(req,res){
	    res.sendFile(__dirname + "/public/views/index.html");
});

router.post('/upload', function(req, res){
console.log("upload");
		res.json({});
});

router.post('/fileupload', function(req, res){

    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
    var oldpath = files.filetoupload.path;
    var newpath = __dirname + '/public/images/' + files.filetoupload.name;

    console.log(fields.name + ' ' + fields.price + ' ' + fields.description + ' ' + newpath);

    let obj = {name:fields.name,price:fields.price,picture:newpath,description:fields.description};
    db.addObject(obj);

    fs.rename(oldpath, newpath, function (err) {
    if (err) throw err;

		console.log("fileupload " + files.filetoupload.name);
        res.redirect("/");
      });
    });
});

module.exports = router;
