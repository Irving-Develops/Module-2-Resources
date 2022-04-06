//JS error types ===============================================================

// let x = 123; 
// let y = 123;

// x.toExponential(y); //Range error because arg is not between (0 - 100)


//Creating your own errors =====================================================

//Error Syntax
// new Error([message[, fileName[, lineNumber]]])

// const first = Error('I am an error');
// const second = Error('I, too, am an error');

// console.log(first);
// console.log(second);

//==============================================================================
//Throw Syntax
// function giveMeNumber(num) {
//     if(typeof num !== 'number'){
//         throw new Error("Give me a number");
//     }else {
//         return 'yay number!';
//     }
// }

// console.log(giveMeNumber(1)); // prints "yay number!";
// console.log(giveMeNumber("apple")); // Uncaught Error: Give me a number!
// console.log(giveMeNumber(1)); // doesn't get run

//==============================================================================

//try...catch Syntax

// try {
//     //statements that will be attempted here
// } catch (error){
//     // if an error is thrown it will be "caught"
//     // allowing the program to continue execution
//     // these statements will be run and the program will continue!
// }

// //example: 

// function safeDivide(a,b) {
//     if(b === 0){
//         throw new Error('cannot divide by 0')
//     }else{
//         return a / b;
//     }
// }

// try {
//     console.log(safeDivide(30, 0));
// } catch (error){
//     console.log(error.name + "; " + error.message)
// }

// console.log('hello');


function callTheArg(arg) {
    arg(); //this will cause a type error
}

try {
    callTheArg(42);
    console.log('call successful');
}catch (error){
    if(error instanceof TypeError) {
        console.log(`Wrong Type: ${error.message}`);
    } else {
        console.log(error.message)
    }
}
console.log('done')
//==============================================================================
