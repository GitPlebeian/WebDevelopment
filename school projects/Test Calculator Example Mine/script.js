var first = document.getElementById("1")
var second = document.getElementById("2")
var op = document.getElementById("op")
var btn = document.getElementById("btn")
var an = document.getElementById("answer")

btn.onclick = function(){

	if(op.value === "ADD"){
		an.innerHTML = first.value + " " + " + " + " " + second.value + " "+"= " + (parseInt(first.value) + parseInt(second.value))
	}
	if(op.value === "SUBTRACT"){
		an.innerHTML = first.value + " " + " - " + " " + second.value + " "+"= " + (parseInt(first.value) - parseInt(second.value))
	}
	if(op.value === "MULTIPLY"){
		an.innerHTML = first.value + " " + " * " + " " + second.value + " "+"= " + (parseInt(first.value) * parseInt(second.value))
	}
	if(op.value === "DIVIDE"){
		if(second.value === "0")
			an.innerHTML = first.value + " " + " / " + " " + second.value + " "+"= " + "infinity"
		else
		an.innerHTML = first.value + " " + " / " + " " + second.value + " "+"= " + (parseInt(first.value) / parseInt(second.value))
	}
	if(op.value === "EXPONENT"){
		an.innerHTML = first.value + " " + " * " + " " + second.value + " "+"= " + Math.pow(parseInt(first.value),parseInt(second.value))
	};
	first.value = "0"
	second.value = "0"
};
