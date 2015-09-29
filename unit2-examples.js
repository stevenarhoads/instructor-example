
// example for Part 1 - #5
function part1Number5(){
	
	// remember - a String is an Array of characters; functionally the same as:
	// 			  ["a", "b", "c", ...]
	var myString = "abcdefghijklmnopqrstuvwxyz";
	
	for(var i = 0; i < myString.length; i++){
		// body of loop
		
		// brackets [] are used to access values at different
		// spots in an array. 
		// e.g.: myString[2] finds the value at the 3rd spot in the myString String
		var charInString = myString[i];
		
		console.log("The character at [" + i + "] is: " + charInString);
	
	} // end of loop
	
}

// run the function for part 5
part1Number5();

/*************************************************************************************/
// example for Part 1 - #6

function printCharsPart6(input){
	
	for(var i = 0; i < input.length; i++){
		// body of loop
		
		var charInString = input[i]; // the character (a, b, c, d, ...) in the String
		var charCode = input.charCodeAt(i); // the ASCII character code
		
		// if its a vowel, skip it
		if(charInString == "a"){ continue; }
		if(charInString == "e"){ continue; }
		if(charInString == "i"){ continue; }
		if(charInString == "o"){ continue; }
		if(charInString == "u"){ continue; }
		
		// 'A' is char: 65
		console.log("'"+ charInString + "' is char: " + charCode);
	
	}// end of loop

}

printCharsPart6("something");

/*************************************************************************************/
// example for Part 2 - #1

function calculator(arg1, action, arg2){
	
	// logic to fill in...
	
}



/*************************************************************************************/
// example for Part 2 - #4

function calcTest(){
	
	console.log(calculator(2, "add", 2));
	// ... fill in the rest
	
}

// run the tests
calcTest();



/*************************************************************************************/
// example for Part 2 - #5

function objectCalculator(calcArgs){
	
	// logic to fill in...
	
}

/* NOTE: 'calcArgs' should look like this: 
	
	var calcArgs = {
		arg1: 2,
		action: "add",
		arg2: 2	
	};
	
*/



/*************************************************************************************/
// example for Part 2 - #6

function calcTest2(){
	
	var testData = [
		// these should be objects that match the layout of the 
		// 'calcArgs' object above
		
		{ arg1: 2, action: "add", arg2: 2 },
		// fill in the rest
	];
	
	// fill in the rest of the logic to call 'objectCalculator' 
	// inside of a loop that goes through the 'testData' objects
	
}