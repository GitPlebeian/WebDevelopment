var pot = $('.currentPot')
var bet = $('.playerBet')
var answer = $('.answer')

var potNumber
var playerBet

var potOdds
function newSet(){
	pot.css('display','block')
	bet.css('display','block')
	answer.css('display','block')

	potNumber = Math.floor(Math.random() * 351 + 50)
	playerBet = Math.floor(Math.random() * 100 + 50)

	potOdds = playerBet / (potNumber + playerBet * 2)
	console.log(potOdds)

	pot.html(potNumber)
	bet.html(playerBet)
}
