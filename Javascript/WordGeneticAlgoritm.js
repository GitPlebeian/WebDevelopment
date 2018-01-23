var target = "hello, world"
var popSize = 20


function individual () {
	this.dna = chromosomeRandomizer()
	this.fittness = 0
}

function chromosomeRandomizer(){
		var possible = '`1234567890-=qwertyuiop[]asdfghjkl;zxcvbnm,./~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:ZXCVBNM<>?'
		var str = ""
		for(var i = 0;i < target.length;i++){
			str += possible.charAt(parseInt(Math.random() * possible.length))
		}
		return str
}
function createIndividuals() {
	var temp = []
	for(var i = 0;i < popSize;i++){
		temp[i] = new individual()
	}
	return temp
}
function logInfo(){
	for(var i = 0;i<individual.length;i++){
		console.log(individual[i].dna  + " " + individual[i].fittness)
	}
}
function calculateFitness(){
	for(var i = 0;i < individual.length;i++){
		individual[i].fittness = 0
		for(var k = 0;k < target.length;k++){
			if(individual[i].dna.charAt(k) == target.charAt(k))
				individual[i].fittness++
		}
	}
}
function selection(){
	var temp = []
	for(var l = 0;l < individual.length;l++){
		var pool = []
		for(var i = 0;i < individual.length;i++){
			var n = (individual[i].fittness / target.length * 100)
			
			var g = 0
			do{
				pool.push(individual[i])
				g++
				
			}while(g < n - 1)
		}
		var one = pool[parseInt(Math.random()*pool.length)]
		var two = pool[parseInt(Math.random()*pool.length)]
		var t = new individual()
		while(two == one){
			two = pool[parseInt(Math.random()*pool.length)]
		}

		for(var i = 0;i < target.length;i++){
				g.dna.charAt(i) = two.dna.charAt(i)
			
		}
		temp[l] = g
	}
	individual = temp


}
var individual = createIndividuals()
calculateFitness()

selection()

logInfo()