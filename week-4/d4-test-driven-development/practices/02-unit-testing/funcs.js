function isFive(num) {
  // Your code here
  if(typeof num !== 'number' || num !== 5){
    return false;
  } 
  return true;
}

function isOdd(number) {
  // Your code here
  
    if(typeof number !== 'number'){
      throw new Error('Invalid number')
    }
  if(number % 2 === 0){
    return false;
  }
  return true;
}

function myRange(min, max, step = 1) {
  // Your code here
  const newArr = [];
  if(min > max){
    return newArr;
  } else if(!step) {
    for(let i = min; i <= max; i++){
      newArr.push(i);
    }
    return newArr;
  } else {
    for(let i = min; i <= max; i+= step){
      newArr.push(i)
    }
    return newArr;
  }
}


module.exports = { isFive, isOdd, myRange };
