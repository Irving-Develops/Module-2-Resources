// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  // Check if the input is length 1 or less
  // If so, it's already sorted: return
  if(arr.length <= 1) return arr;
  // Divide the array in half
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid)
  console.log(left, "<--- left")
  console.log(right, "<--- right")
  return merge(
  // Recursively sort the left half
  mergeSort(left),
  // Recursively sort the right half
  mergeSort(right)
  // Merge the halves together and return
  );
}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty return array
  let arr = [];
  // Point to the first value of each array
  let arrAIndex = 0;
  let arrBIndex = 0;
  // While there are still values in each array...
  while(arrA.length > arrAIndex || arrB.length > arrBIndex) {
    // Compare the first values of each array
    if(arrA[arrAIndex]< arrB[arrBIndex]){
    // Add the smaller value to the return array
    arr.push(arrA[arrAIndex])
    // Move the pointer to the next value in that array
      arrAIndex++;
    }else{
      arr.push(arrB[arrBIndex]);
      arrBIndex++;
    }
  }
  return arr;
  // Return the return array

}
console.log(merge([1,4,8], [2,3,6,9]))
console.log(mergeSort([2, 4, 6, 8, 1, 3, 5, 7, 9]))
module.exports = [merge, mergeSort];
