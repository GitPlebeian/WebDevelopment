var variable = '7';
var exponent = "3"

exponentEquation(variable,exponent);

function exponentEquation(variable,exponent) {
	var result = variable;
	for(var i = 1;i < exponent;i++){
		result *= variable;
	}
	console.log(result);
}