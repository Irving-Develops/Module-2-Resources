/*
Binary, number base practice

In this exercise, translate the following values into the
appropriate number base. Expect to use the following methods
and consult their documentation on how to utilize them:
    parseInt()
    Number.toString()
    String.fromCharCode()
    string.charCodeAt()
*/

/*
Base 10 to binary
*/
function deciToBinary(blob) {
    // Your code here
    return "0b" + blob.toString(2);
}

// console.log('Base 10 to binary:');
console.log(deciToBinary(8)); // '0b1000'
console.log(deciToBinary(24)); // '0b11000'
console.log(deciToBinary(255)); // '0b11111111'
// console.log('');

// /*
// Base 10 to hexadecimal
// */
function deciToHexa(blob) {
    // Your code here
    return "0x" + blob.toString(16);
}

// console.log('Base 10 to hexadecimal:');
// console.log(deciToHexa(8)); // '0x8'
// console.log(deciToHexa(24)); // '0x18'
// console.log(deciToHexa(255)); // '0xff'
// console.log('');

// /*
// Binary to base 10
// */
function binaryToDeci(blob) {
    // Your code here
      blob = blob.slice(2);
      return parseInt(blob, 2);
}

// console.log('Binary to base 10:');
// console.log(binaryToDeci('0b1010')); // 10
// console.log(binaryToDeci('0b0011')); // 3
// console.log('');

// /*
// Hexadecimal to base 10
// */
function hexaToDeci(blob) {
    // Your code here
    return parseInt(blob, 16);
}

// console.log('Hexadecimal to base 10:');
// console.log(hexaToDeci('0xa1')); // 161
// console.log(hexaToDeci('0xff')); // 255
// console.log('');

// /*
// Binary to hexadecimal
// */
function binaryToHexa(blob) {
    //     // Your code here
    blob = blob.slice(2);
    hexa = parseInt(blob, 2).toString(16);
    return "0x" + hexa;
}

// console.log('Binary to hexadecimal:');
// console.log(binaryToHexa('0b1010')); // '0xa'
// console.log(binaryToHexa('0b0011')); // '0x3'
// console.log('');

// /*
// Hexadecimal to binary
function hexaToBin(blob) {
    // Your code here
    blob = blob.slice(2);
    let binary = parseInt(blob, 16).toString(2);
    return "0b" + binary;
}

// console.log('Hexadecimal to binary:');
// console.log(hexaToBin('0xa1')); // '0b10100001'
// console.log(hexaToBin('0xff')); // '0b11111111'
// console.log('');

// /*
// Base 10 to ASCII
// */
function deciToAscii(blob) {
    //     // Your code here
    let letter = String.fromCharCode(blob);
    return letter;
}

// console.log('Base 10 to ASCII:');
// console.log(deciToAscii(65)); // 'A'
// console.log(deciToAscii(66)); // 'B'
// console.log(deciToAscii(97)); // 'a'
// console.log(deciToAscii(98)); // 'b'
// console.log('');

// /*
// Hexadecimal to ASCII
// */
function hexaToAscii(blob) {
    // Your code here
    let letter = String.fromCharCode(blob);
    return letter;
}

// console.log('Hexadecimal to ASCII:');
// console.log(hexaToAscii(0x41)); // 'A'
// console.log(hexaToAscii(0x42)); // 'B'
// console.log(hexaToAscii(0x61)); // 'a'
// console.log(hexaToAscii(0x62)); // 'b'
// console.log('');

// /*
// Binary to ASCII
// */
function binToAscii(blob) {
    // Your code here
    let letter = String.fromCharCode(blob)
    return letter;
}

// console.log('Binary to ASCII:');
// console.log(binToAscii(0b01000001)); // 'A'
// console.log(binToAscii(0b01000010)); // 'B'
// console.log(binToAscii(0b01100001)); // 'a'
// console.log(binToAscii(0b01100010)); // 'b'
// console.log('');

// /*
// ASCII to decimal
// */
function asciiToDeci(blob) {
    // Your code here
    let num = blob.charCodeAt(0);
    return num;
}

// console.log('ASCII to decimal:');
// console.log(asciiToDeci('A')); // 65
// console.log(asciiToDeci('B')); // 66
// console.log(asciiToDeci('a')); // 97
// console.log(asciiToDeci('b')); // 98
