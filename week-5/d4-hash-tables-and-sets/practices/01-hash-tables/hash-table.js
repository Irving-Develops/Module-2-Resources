const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {
    // Your code here
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(numBuckets).fill(null);
  }

  hash(key) {
    // Your code here
    let hashCode = sha256(key)
    return parseInt(hashCode.slice(0, 8), 16);
  }

  hashMod(key) {
    // Your code here
    let num = this.hash(key);
    return num % this.capacity;
  }

  insertNoCollisions(key, value) {
    // Your code here
    let indexOfInsert = this.hashMod(key);
    if (this.data[indexOfInsert] !== null) {
      throw new Error('hash collision or same key/value pair already exists!')
    }
    this.data[indexOfInsert] = new KeyValuePair(key, value);
    this.count++;
  }

  insertWithHashCollisions(key, value) {
    // Your code here
    let indexOfInsert = this.hashMod(key);
    // console.log(indexOfInsert)
    let keyValuePair = new KeyValuePair(key, value);
    console.log(this.data[indexOfInsert])
    if (this.data[indexOfInsert] !== null) {
      KeyValuePair[this.next] = keyValuePair;
      // KeyValuePair[this.next]= new KeyValuePair(key, value);
    }
    this.data[indexOfInsert] = new KeyValuePair(key, value);;
    this.count++;
  }

  insert(key, value) {
    // Your code here
  }

}


const newHashTable = new HashTable(2);
// console.log(hashTable.data, "<------ data");
// let newKV = new KeyValuePair(105, "john")
// let newKV2 = new KeyValuePair(105, "anne")

// newHashTable.data[0] = newKV;
// console.log(hashTable.data, "<------ data");
// console.log(newKV)
let code = sha256("C");
// console.log(code)
// code = code.slice(2 , 10)
// let num = parseInt(code.slice(0, 8), 16);
// console.log(num);
console.log(newHashTable.insertNoCollisions( "C"), "<------test")
console.log(newHashTable.insertWithHashCollisions("C"), "<------test")

console.log(newHashTable.data)


module.exports = HashTable;