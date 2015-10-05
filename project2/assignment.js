

function calculator(arg1, action, arg2){
	
	// empty value checks
	if(arg1 === null || arg1 === undefined){ return "INVALID"; }
	if(arg2 === null || arg2 === undefined){ return "INVALID"; }
	if(action === null || action === undefined){ return "INVALID"; }
	
	// data type checks
	if(typeof(arg1) !== "number"){ return "INVALID"; }
	if(typeof(arg2) !== "number"){ return "INVALID"; }
	if(typeof(action) !== "string"){ return "INVALID"; }
	
	//if(isNaN(arg1)){ return "INVALID"; }
		
	action = action.toLowerCase();
	// perform the action
	if(action === "add"){ return arg1 + arg2; }
	if(action === "subtract"){ return arg1 - arg2; }
	if(action === "multiply"){ return arg1 * arg2; }
	if(action === "divide"){ return arg1 / arg2; }
	/* 
	switch(action){
		case "add":
		case "ADD":
			return arg1 + arg2;
		case "subtract":
			return arg1 - arg2;
	}
	*/ 
	
	// if we're down here, there's a problem...
	return "INVALID";
}

/*************************************************************************************/
// example for Part 2 - #4

function calcTest(){
	
	console.log(calculator(2, "add", 2));
	console.log(calculator(2, "subtract", 2));
	console.log(calculator(2, "multiply", 2));
	console.log(calculator(2, "divide", 2));	
}

// run the tests
//calcTest();




function objectCalculator(calcArgs){
	
	if(calcArgs === null || calcArgs === undefined){ return "INVALID"; }
	
	var arg1 = calcArgs.arg1;
	var action = calcArgs.action;
	var arg2 = calcArgs.arg2;
	
	// empty value checks
	if(arg1 === null || arg1 === undefined){ return "INVALID"; }
	if(arg2 === null || arg2 === undefined){ return "INVALID"; }
	if(action === null || action === undefined){ return "INVALID"; }
	
	// data type checks
	if(typeof(arg1) !== "number"){ return "INVALID"; }
	if(typeof(arg2) !== "number"){ return "INVALID"; }
	if(typeof(action) !== "string"){ return "INVALID"; }
	
	// logic to fill in...
	if(action === "add"){ return arg1 + arg2; }
	if(action === "subtract"){ return arg1 - arg2; }
	if(action === "multiply"){ return arg1 * arg2; }
	if(action === "divide"){ return arg1 / arg2; }
	
	return "INVALID";
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
		{ arg1: 2, action: "subtract", arg2: 2 },
		{ arg1: 2, action: "multiply", arg2: 2 },
		{ arg1: 2, action: "divide", arg2: 2 },
		null
	];
	
	// fill in the rest of the logic to call 'objectCalculator' 
	// inside of a loop that goes through the 'testData' objects
	
	for(var i = 0; i < testData.length; i++){
		
		var calcArgs = testData[i];
		
		var result = objectCalculator(calcArgs); 
		
		console.log("The result is: " + result);
	}
}

calcTest2();