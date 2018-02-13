const randommine = require('./randomMine')

randommine.setRange(100,150)
console.log("min = "+randommine.getMin() + " max = " + randommine.getMax() +
" range "+ randommine.getRange())
console.log(randommine.getValue())

randommine.setRange(0,3)
console.log("min = "+randommine.getMin() + " max = " + randommine.getMax() +
" range "+ randommine.getRange())
console.log(randommine.getValue())
