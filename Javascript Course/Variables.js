// Variable is conveted to a string
var age = 17
var str = 'Jax\'s age: '
console.log(str + age);

// realNum is also converted to a string in both cases
console.log('');
var strNum = '45'
var realNum = 45
console.log(strNum + realNum);
console.log(realNum + strNum);
// TestingNum is a string
var testingNum = strNum + realNum
console.log(testingNum);
console.log(typeof testingNum);
