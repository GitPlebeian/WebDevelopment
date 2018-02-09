var trueStart = new Date().getTime();
var target = "To be or not to be, that is the question."
var popSize = 200
//Mutation chance out of 10,000
var mutationChance = 20
var mutateOnEveryGene = true
var numTimesToCycle = 100


class individual {
	constructor(){
		this.dna = chromosomeRandomizer()
		this.fittness = 0
	}
	changeDna(index,char){
		var str = ''
		for(var i = 0;i < this.dna.length;i++){
			if(i == index){
				str += char
			}else{
				str += this.dna.charAt(i)

			}
		}
		this.dna = str
	}
}

function chromosomeRandomizer(){
		var possible = '`1234567890-=qwertyuiop[]asdfghjkl; zxcvbnm,./~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:ZXCVBNM<>?'
		var str = ""
		for(var i = 0;i < target.length;i++){
			str += possible.charAt(parseInt(Math.random() * possible.length))
		}
		return str
}
function mutate(){
		var possible = '`1234567890-=qwertyuiop[]asdfghjkl; zxcvbnm,./~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:ZXCVBNM<>?'
		return possible.charAt(parseInt(Math.random() * possible.length))
}
function createIndividuals() {
	var temp = []
	for(var i = 0;i < popSize;i++){
		temp[i] = new individual()
	}
	return temp
}
function logInfo(){
	console.log(generation);
	 for(var i = 0;i<population.length;i++){
	 	console.log(population[i].dna  + " " + population[i].fittness)
	 }
	 console.log("");
	console.log(fittestIndivdual.dna  + " " + fittestIndivdual.fittness)
	console.log("");
}
function calculateFitness(){
	for(var i = 0;i < population.length;i++){
		population[i].fittness = 0
		for(var k = 0;k < target.length;k++){
			if(population[i].dna.charAt(k) == target.charAt(k))
				population[i].fittness++
		}
	}
	fittestIndivdual = population[0]
	for(var h = 0; h < population.length;h++){
		if(population[h].fittness > fittestIndivdual.fittness)
			fittestIndivdual = population[h]
	}
}
function selection(){
	calculateFitness()
	var temp = []
	for(var l = 0;l < population.length;l++){
		var pool = []
		for(var i = 0;i < population.length;i++){
			var n = (population[i].fittness / target.length * 100)
			var g = 0
			do{
				pool.push(population[i])
				g++

			}while(g < n - 1)

		}
		// console.log(pool);
		// console.log('');
		var one = pool[parseInt(Math.random()*pool.length)]
		var two = pool[parseInt(Math.random()*pool.length)]
		var child = new individual()
		while(two == one){
			two = pool[parseInt(Math.random()*pool.length)]
		}
		for(var k = 0;k < target.length;k++){
			if(mutateOnEveryGene){
				if(parseInt(Math.random() * 10000) <= mutationChance){
					child.changeDna(k,mutate())
				}
				else if(parseInt(Math.random() * 2) == 0){
					child.changeDna(k,one.dna.charAt(k))
				}
				else {
					child.changeDna(k,two.dna.charAt(k))
				}
			}
		}
		// console.log(one);
		// console.log(two);
		// console.log("");
		// console.log(child);
		// console.log("");
		temp[l] = child
	}
	population = temp
	calculateFitness()
}

var cycleTimes = []
for(var p = 0;p < numTimesToCycle;p++){
	var start = new Date().getTime();
	var generation = 0
	var population = createIndividuals()
	var fittestIndivdual
	calculateFitness()
	while(fittestIndivdual.fittness != target.length || generation == 100000){
		selection()
		logInfo()
		generation++
	}
	var end = new Date().getTime();
	console.log("Cycle: " + (p + 1));
	console.log('Generations: ' + generation);
	console.log("Time: " + (end - start) / 1000 + " Seconds");
	console.log("");
	//console.log("")
	cycleTimes.push(end - start)

}
var averageTime = 0
for(var y = 0; y < cycleTimes.length;y++){
	averageTime += cycleTimes[y]
	console.log(cycleTimes[y] / 1000 + " Seconds")
}
console.log("")
console.log((averageTime / cycleTimes.length) / 1000 + " seconds is the averageTime")

var trueEnd = new Date().getTime();
console.log("")
console.log("Whole Process took " + ((trueEnd - trueStart) / 1000) + " seconds")
