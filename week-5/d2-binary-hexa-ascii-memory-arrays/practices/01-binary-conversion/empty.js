function binaryToHexa(blob) {
    //     // Your code here
    blob = blob.slice(2);
    hexa = parseInt(blob, 2).toString(16);
    return "0x" + hexa;
}

console.log('Binary to hexadecimal:');
console.log(binaryToHexa('0b1010')); // '0xa'
console.log(binaryToHexa('0b0011')); // '0x3'
console.log('');
