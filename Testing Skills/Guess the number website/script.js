var response = document.getElementById("response")
var randNum = parseInt(Math.random() * 100);
window.addEventListener("keypress", myEventHandler, false);
// console.log(randNum)

    
function myEventHandler(e) {

    var keyCode = e.keyCode;

    if (keyCode == 13) {
        var input = document.getElementById("answer").value
        if (input < 100 && input >= 0 && input != null) {
            if (input > randNum) {
                response.innerHTML = "Your guess is too high";
            } else if (input < randNum){
                response.innerHTML = "Your guess is too low";
            }else{
            	response.innerHTML = "You win!";
            }
        } else {
            response.innerHTML = "You guess is not a valid answer.";
        }
        document.getElementById("answer").value = null;
    }
};