class DynamicArray{

    constructor(defaultSize = 4) {
      this.length = 0;
      this.capacity = defaultSize;
      this.data = new Array(defaultSize)


    }

    read(index) {

      // Fill this out
      // You may not use any built-in JS array functions
     return this.data[index];

    }

    unshift(val) {

      // Fill this out
      // You may not use any built-in JS array functions
      for(let i = this.length; i > 0; i--) {
        this.data[i] = this.data[i - 1];
      }
      this.data[0] = val;
      this.length++;
    }

  }

  let dynamicArr = new DynamicArray(8)
  dynamicArr.data[0] = 99;

  console.log(dynamicArr.read(0))


  module.exports = DynamicArray;
