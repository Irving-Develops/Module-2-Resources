function linearSearch (arr, target) {

  // Can you solve this in one line?
for(let i = 0; i < arr.length; i++){
  if(arr[i] === target) return target;
  
}
  return -1;

};

function binarySearch(arr, target) {

  // Set integers pointing to the high and low range of possible indices
  let low = 0
  let high = arr.length - 1;

  // While high and low indices do not overlap...
  while(low <= high){
    // Find the midpoint between high and low indices
    let mid = Math.floor((high + low) / 2);
    // Compare the target value to the midpoint value
    if(arr[mid] === target){
    // If the target equals the midpoint...
      // Return the midpoint index
      return arr[mid];
    }else if(target > arr[mid]){
      // If the target is higher than the midpoint...
        // Move the low pointer to midpoint + 1
      low = mid + 1;
    }else if(target < arr[mid]){
      // If the target is less than the midpoint...
        // Move the high pointer to midpoint - 1
      high = mid - 1;
    }
  }
  
  // Return -1 if the loop exits with overlapping pointers
  return -1;

}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17], 14))

module.exports = [linearSearch, binarySearch]
