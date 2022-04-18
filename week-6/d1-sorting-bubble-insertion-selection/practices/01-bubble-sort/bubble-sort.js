function bubbleSort(arr) {
let swapped = true;;
  while (swapped) {
    swapped = false;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i+1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        
        swapped = true;
        console.log(arr.join(","));
      }
    }
    
  }
  return arr;
}

// function bubbleSort(arr) {

//   // Iterate through the array
//   for (let i = 0; i < arr.length; i++) {
//     // If the current value is greater than its neighbor to the right
//     let current = arr[i];
//     let next = arr[i + 1];
//     if (current > next) {
//       // Swap those values
//       [current, next] = [next, current];
//       // Do not move this console.log
//       console.log(arr.join(","));
//     }
//     // If you get to the end of the array and no swaps have occurred, return
//     if ()
//   }
//   // Otherwise, repeat from the beginning

// }

module.exports = bubbleSort;