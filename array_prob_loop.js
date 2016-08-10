
// PROBLEM 1
// printReverse()
// write a function printReverse() that takes an array
// as an argument and prints out the elements
// in the array in reverse order(don't actually reverse the 
//   array itself)


// emily's solution:
function printReverse(arr){
  for(var i = (arr.length - 1); i >= 0; i--){
    console.log(arr[i]);
  }
}
printReverse(["a", "b", "c"])

// inustrctor's solution:

function printReverse2(arr){
  for(var i = arr.length - 1; i >= 0; i--){
    console.log(arr[i]);
  }
}
printReverse2([3, 6, 2, 5]);

// Problem 2

// sum array
// write a function sumArray() that accepts an array
// of numbers and returns the sum of all numbers
// in the array


// emily's solution:
function sumArray(arri){
  counter = 0;
  for(var i = 0; i < arri.length; i++){
    counter += arri[i];
  }
  return counter;
}

sumArray([1, 2, 3, 4]);
sumArray([2, -1, 4]);

// instructor's solution:
function sumArray(arr){
  var total = 0;
  arr.forEach(function(element){
    total += element;
  });
  return total;
}




//// WHOA, new prob, isUniform?
// instruction solution:

function isUniform(arr){
  var first = arr[0];
  for(var i = 1; i < arr.length; i++){
    if(arr[i] !== first){
      return false;
    }
  }
  return true;
}

isUniform([1, 1, 2])
isUniform([1, 2, 3, 2, 1])
isUniform([1, 1, 1]) // true
isUniform([1, 2, 2, 1])



// Problem 3
// write a function called max() that accepts an
// array of numbers and returns the maximum number in that array

// emily's solution:
function max(aria){
  tester = aria[0];
  for(var i = 0; i < aria.length; i++){
    if(aria[i] > tester){
      tester = aria[i];
    }
  }
  return tester;
}

max([3, 1, 5, 7, 2])


// instructor's solution:


function max(arr){
  var max = arr[0];
  for(var i = 1; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
    }
  }
  return max;
}







