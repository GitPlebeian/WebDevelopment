//////////////////////////////////////
function Car (make, model, year) {
	this.make = make
	this.model = model
	this.year = year

}

function calculateValue (brandNewPrice) {	

}

var myCar = new Car('honda', 'odyssey', 2007,27000)
console.log(myCar.make)
console.log(myCar.model)
console.log(myCar.year)
console.log('')
/////////////////////////////////////

var Animal = {
	type: 'Invertrbrates',
	displayType: function() {
		console.log(this.type)
	}
}

var animal1 = Object.create(Animal)
animal1.displayType();

var fish = Object.create(Animal)
fish.type = 'Fish'
fish.displayType()
console.log('')
///////////////////////////////////////////

 var Family = {
	netIncome: 0,
	members: 0,
	Individual: {
		callName: function(){
			console.log(this.name)
		},
		name: ''
	}
}
var tubbsFamily = Object.create(Family)
tubbsFamily.netIncome = 100
tubbsFamily.boby