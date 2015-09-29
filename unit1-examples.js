
console.log("Hello World!");
console.log("This is a 'single quoted statement' and this is a \"double quoted statement\"");

// #5
console.log("2 plus 2 equals " + (2 + 2));

// #6
console.log("The answer is: $" + (33.00 - 15.87));

// #7
console.log("The type of 56 is: " + (typeof(56)));

// #8
var foo = 2,
	bar = 3;
	
var sum = foo + bar;

// #9
var car = {
	make: "Chevrolet",
	model: "Silverado"
};

var me = {
	name: "John",
	age: "22"
};

me.car = car;

// #10
var fruits = ["bananas", "apples", "oranges", "kiwis", "lemons", "limes"];

console.log(fruits.join("|")); // bananas|apples|oranges|kiwis|lemons|limes

fruits.pop(); // limes
fruits.pop(); // lemons
fruits.shift(); // bananas

console.log(fruits.join("-"));
