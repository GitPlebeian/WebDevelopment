var canvas = document.getElementById("canvas");
var width = canvas.width;
var height = canvas.height;

gridWidth = 16

var boxWidth = width/gridWidth
var boxHeight = height/gridWidth

console.log(boxWidth)
console.log(boxHeight)

var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
console.log(width)
// ctx.fillRect(0,0,width/2,height/2);

var xPos = 0;
var yPos = 0;


// ctx.fillRect(xPos*boxWidth,yPos*boxHeight,boxWidth,boxHeight);

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
        	if(xPos > 0){
            	xPos--
            }
            ctx.fillRect(xPos*boxWidth,yPos*boxHeight,boxWidth,boxHeight);
            break;
        case 38:
            if(yPos < 0){
            	xPos--
            }        	
            ctx.fillRect(xPos*boxWidth,yPos*boxHeight,boxWidth,boxHeight);
            break;
        case 39:
            if(xPos < gridWidth){
            	xPos++
            }        
            ctx.fillRect(xPos*boxWidth,yPos*boxHeight,boxWidth,boxHeight);
            break;
        case 40:
            ctx.fillRect(xPos*boxWidth,yPos*boxHeight,boxWidth,boxHeight);
            if(yPos < gridWidth){
            	yPos++
            }
            break;
    }
};