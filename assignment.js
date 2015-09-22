/* 
	CSC 175
	HW 1
	Eric M. Barnard
*/
; 

console.log("Hello my name is Eric!"); 
console.log("hello other world");

// hey this is a single-line comment

  /* blah blah blah */
  
function someFunc( argA /* this is what argA is */, argB){};

/*
var some_string = "hello \" 'world'";
var some_string2 = 'hello "world"';

// camel-casing
var aVeryLongName = 2;



var numberOne = 1;
console.log(1);
console.log(1.01);
*/
var aString = "an example string";
console.log(aString.toUpperCase());

var aDate = new Date();
console.log(typeof(2));
console.log(typeof("2"));

console.log(2 + 2);
console.log(4 / 2);
console.log(3 - 2);
console.log(5 % 4);

var someVar = 2;

console.log("the number two is: " + 2);

var someVarOne = "test",
	someVarTwo = 3,
	someVarThree = 4;
	
someVarOne = "test";
someVarTwo = 3;

console.log("My first var is: " + someVarOne + " my other variable is: " + someVarTwo);

var stepOne = 99.786 / 2;
var stepTwo = stepOne * 3.1415;
var stepThree = stepTwo + stepOne;

var myCar = {
	year: 2008,
	make: "Ford"	
};

myCar.model = "Escape";
delete myCar.year;

console.log(myCar);
console.log(myCar.make);
console.log(myCar['make']);

var obj = {};
var arr = [];

var myArray = [
	"a", "b", "c", 	
];

var first = myArray[0];

myArray[9] = "c";

console.log(myArray.indexOf("c"));
console.log(myArray.reverse());
console.log(myArray.join("|"));

console.log("Some string \"more stuff inside of a string\" aaaa");