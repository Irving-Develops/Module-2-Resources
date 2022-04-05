function biggerNumber(num1, num2){
  if(num2 > num1) return num2;
  return num1;
}


function multiplyBiggerNumByTwo(num1, num2) {
  let biggerNum = biggerNumber(num1, num2);
  return biggerNum * 2;
}

function divideBiggerNumByThree(num1, num2) {
  let bigNum = biggerNumber(num1, num2);
    return bigNum / 3;
  }


function eatMostTacos(sum1, sum2) {
  let bigNum = biggerNumber(sum1, sum2);
  return `I ate ${bigNum} tacos.`;
  
}

function adoptSmallerDog(weight1, weight2) {
  let smallDog = biggerNumber(weight1, we);
  if (weight1 < weight2) {
    smallDog = weight1;
    return `I adopted a dog that weighs ${smallDog} pounds.`;
  } else {
    smallDog = weight2;
    return `I adopted a dog that weighs ${smallDog} pounds.`;
  }
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};
