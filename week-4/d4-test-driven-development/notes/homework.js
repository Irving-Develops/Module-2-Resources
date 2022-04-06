//JS error types ===============================================================

// let x = 123; 
// let y = 123;

// x.toExponential(y); //Range error because arg is not between (0 - 100)


//Creating your own errors =====================================================

//Syntax
// new Error([message[, fileName[, lineNumber]]])

const first = Error('I am an error');
const second = Error('I, too, am an error');

console.log(first);
console.log(second);