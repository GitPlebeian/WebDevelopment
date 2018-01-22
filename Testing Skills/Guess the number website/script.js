var response = document.getElementById("response")
var randNum = parseInt(Math.random() * 100);
window.addEventListener("keypress", myEventHandler, false);
// console.log(randNum)
var numTries = 0;
var win = true;
function myEventHandler(e) {

    var keyCode = e.keyCode;

    if (keyCode == 13 && win) {
        var input = document.getElementById("answer").value
        var triesVal = document.getElementById("tries")
        if (input < 100 && input >= 0 && input != "") {
        	numTries++;
            if (input > randNum) {
                response.innerHTML = "Your guess is too high";
            } else if (input < randNum) {
                response.innerHTML = "Your guess is too low";
            } else {
                response.innerHTML = "You win!";
                win=false
            }
        } else {
            response.innerHTML = "You guess is not a valid answer.";
        }
        document.getElementById("answer").value = null;
        if (win) {
        	triesVal.innerHTML = "Tries: " + numTries
        }
        
    }
};