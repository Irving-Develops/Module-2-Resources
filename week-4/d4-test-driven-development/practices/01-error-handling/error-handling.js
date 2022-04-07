// // 1.
// function sum(array) {
//   let sum = 0;

//   try {
//     for (let i = 0; i < array.length; i++) {
//       sum += array[i];
//     }
//   } catch (e) {
//     if (e instanceof TypeError) {
//       console.log(e.message);
//     }else{
//       throw e;
//     }
//   }
//   return sum;
// }

// let res = sum(null);
// console.log(res);

//2.
// tests

// Your code here

// function sayName(name) {
//   console.log(name)

// }

// try {
//   sayName("Alex");
//   sayName(1);
//   if (typeof name !== "string") {
//     throw new Error("Need a string");
//   }
// } catch (error) {

//   console.log(error.message);

// }



// 3.
function greet(greeting) {
    if (!greeting) {
      throw new Error("There was no greeting given.");
    }
    console.log(greeting);
}

try{
  greet("");
}catch(e) {
  console.log("hello world")
}





// try {
//   const num = 10;
//   if (typeof num !== 'string') {
//     throw new Error('Need a string');
//   }
// } catch (e) {
//   errorThrown(e.message);
// }