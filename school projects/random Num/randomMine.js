var minimum
var maximum
var range
exports.setRange = function(min,max){
  minimum = min
  maximum = max
  range = max - min
}
exports.getMin = function(){
  return minimum
}
exports.getMax = function() {
  return maximum
}
exports.getRange = function(){
  return (maximum - minimum + 1)
}
exports.getValue = function(){
  return Math.floor(Math.random() * range + minimum)
}
