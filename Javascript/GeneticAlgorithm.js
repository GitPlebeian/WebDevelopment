var geneLength = 15
var populationSize = 20

function individual () {
	this.dna = geneRandomizer()
}

function geneRandomizer() {
  	var dna = ""
  	for(var i = 0; i < geneLength;i++){
  		dna += parseInt(Math.random() * 2)
  	}
  	// console.log('Gene Randomizer: working')
  	return dna
}
function createIndividuals(){
	var individuals = []
	for(var i = 0;i< populationSize;i++){
		individuals[i]  = new individual()
	}
	return individuals
}
function calculateFitness(){
	
}

var individuals = createIndividuals()

while(maxFitness != geneLength){

	calculateFitness()

	parentalSelection()
	reproduce
}