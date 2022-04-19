

function selectionSort(arr) {

  // Copy the original array
  // let arrCopy = [...arr]
  // Create an array to store the sorted values
  // let sortedArr = [];
  // While the array is not empty...
    // while(arr)
    // Do not move this console.log
    // console.log(sorted.join(","));

    // Find the index of the minimum value in the unsorted half

    // Save and remove the value at the min index

    // Add the min value to the end of the sorted array

}



function selectionSortInPlace(arr) {

  for(let i = 0; i < arr.length; i++){
    let min = i;
    console.log(arr.join(","));
    for(let j = i + 1; j < arr.length; j++){
      if(arr[j] < arr[min]){
        min = j;
      }
    }
    if(i !== min){
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;

  // Set a pointer at zero diving the array into sorted and unsorted halves

  // Repeat while the unsorted half is not empty:

    // Do not move this console.log

    // Find the index of the minimum value in the unsorted half

    // Save the min value

    // Shift every unsorted value to the left of the min value to the right by 1

    // Put the min value at the divider

    // Increment the divider and repeat

}


module.exports = [selectionSort, selectionSortInPlace];
