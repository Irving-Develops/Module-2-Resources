function hexaToBin(blob) {
    // Your code here
   // blob = blob.slice(2);
    //let binary = parseInt(blob, 16).toString(2);
    return "0b" + parseInt(blob.slice(2), 16).toString(2);
}

console.log('Hexadecimal to binary:');
console.log(hexaToBin('0xa1')); // '0b10100001'
console.log(hexaToBin('0xff')); // '0b11111111'
console.log('');
