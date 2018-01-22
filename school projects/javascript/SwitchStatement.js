switch(expression) {
    case n:
        code block
        break;
    case n:
        code block
        break;
    default:
        code block
}
for (i = 0; i < cars.length; i++) { 
    text += cars[i] + "<br>";
}

while (condition) {
    code block to be executed
}

do {
    code block to be executed
}
while (condition);

var first = fruits[0];
// Apple

var last = fruits[fruits.length - 1];
// Banana



Loop over an Array

fruits.forEach(function(item, index, array) {
  console.log(item, index);
});
// Apple 0
// Banana 1

var newLength = fruits.push('Orange');
// ["Apple", "Banana", "Orange"]

var last = fruits.pop(); // remove Orange (from the end)
// ["Apple", "Banana"];

var newLength = fruits.unshift('Strawberry') // add to the front
// ["Strawberry", "Banana"];

fruits.push('Mango');
// ["Strawberry", "Banana", "Mango"]

var pos = fruits.indexOf('Banana');
// 1

var removedItem = fruits.splice(pos, 1); // this is how to remove an item
                                        
// ["Strawberry", "Mango"]