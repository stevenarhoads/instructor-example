

console.log("Hello World!");

function someFunc(myNumber){
	return myNumber + 3;
}

var answer = someFunc(2); // 5


// more complex
function someFunc2(myNumber, myNumber2, myNumber3){
	return myNumber + 3;
}

var answer = someFunc(2); // 5
var answer2 = someFunc2(2, 3, 4);


// 
var total = 0;

function exampleFunc(){
	var 
		someVariable = 2;
		
	total += someVariable + 3;
	
	return function created(){
		return total;
	};
}

exampleFunc()();

function main(){
	
	var x = 2;
	
	if(x !== 2){
		
	} 
	else if(x == 1){
		
	}	
	else {
		
	}
	
	
	var someObj;
	
	if(someObj){
		console.log("true");
	}
	
	
	
}

main();

console.log((undefined == null));

function anotherFunc(param1){
	if(param1 === undefined || param1 === null)
	
	var realParam = param1 || 2;
	
	if(realParam == 2){ realParam = 3; }
	
	var otherParam = (realParam == 3 ? 4 : 5);
	
	
	
	function divide(){};
	function multiply(){};
	
	var action = "multiply";
	
	var funcToInvoke = (action == "multiply"
							? multiply
							: divide);
	
	
	console.log(typeof(param1));
}

anotherFunc(); // undefined

var someVar = null;
anotherFunc(someVar); // null

function callMe(){
	console.log("Hello Eric Barnard");
}


(function(){
	
	// for loop example
	var myArray = [
		1, 2, 3, 4, 5, 6, 7, 8, 9
	];
	
	var i, element;
	
	for(i = 0; i < myArray.length ; i++){
		element = myArray[i];
		console.log(element);
	}
	
	while(i < myArray.length){
		if(i % 2 == 0){
			i++;
			continue;
		}
		
		if(myArray[i] == 5){
			break;
		}		
		
		i++;
	}
	
	
	var myString = "abcdefghijk";
	//var myString2 = ["a", "b", "c", "d"];
	
	for(var i = 0; i < myString.length; i++){
		// body of loop
		
		// charInString = myString[2]; // 'c'
		var charInString = myString[i];
		
		console.log("The character at [" + i + "] is: " + charInString);
	}
	
}());




function printChars(input){
	
	for(var i = 0; i < input.length; i++){
		// body of loop
		
		var charInString = input[i];
		var charCode = input.charCodeAt(i);
		
		if(charInString == "a"){ continue; }
		if(charInString == "e"){ continue; }
		if(charInString == "i"){ continue; }
		if(charInString == "o"){ continue; }
		if(charInString == "u"){ continue; }
		
		// 'A' is char: 65
		console.log("'"+ charInString + "' is char: " + charCode);
	}
}

printChars("something");


