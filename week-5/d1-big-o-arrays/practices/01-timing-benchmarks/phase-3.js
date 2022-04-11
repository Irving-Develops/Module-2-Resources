const [addNums, addManyNums] = require("./phase-1");
// let startTime = new Date();
function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  // Then, add timing code
  console.time("Timer 1", "<-------- Start")
    let newArr = [];
    for (let i = increment; i <= increment * 10; i += increment) {
      newArr.push(addNums(i));
      console.timeLog("Timer 1")
    }
    console.timeEnd("Timer 1", "<-------- End")
    return newArr;
}
// let endTime = new Date()
// console.log(`Runtime: ${endTime - startTime}ms`);


function addManyNums10Timing(increment) {
// Copy your `addManyNums10` code here
// Then, add timing code
  console.time("Timer 2", '<------- Start')
  newArr = [];
  for (let i = increment; i <= increment * 10; i += increment) {
    newArr.push(addManyNums(i));
    console.timeLog("Timer 2")
  }
  console.timeEnd("Timer 2", "<-------- End")
  return newArr;
}

n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);
console.log("\n***********\n");




n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
