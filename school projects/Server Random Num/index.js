const seedrandom = require('seedrandom')

let rng = seedrandom()


for(var i = 0;i < 100;i++){
	myRandomNumber = rng() * 10
console.log(myRandomNumber)
}