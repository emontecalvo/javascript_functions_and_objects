// return true is number is even, false if not

// long way:
// function isEven(num) {
//   if (num % 2 === 0){
//     return true;}
//   else {
//     return false;
//   }
// }
//short way:
function isEven(num) {
  return num % 2 === 0;
}

isEven(9)

// factorial - 4!  take number
// and return num * num-1 * num-2,  but 0 factorial is 1

function factorial(numi) {
  var result = 1;
  for(var i = 2; i<= numi; i++){
    result *= i;
  }
  return result;
}

factorial(4)

// kebab to snake
//takes single string argument that
// puts underscore_ between words kebeb-spaced
// bonus - also replace for spaces

function kebabToSnake(str) {
  var newStr = str.replace(/[- ]/g, "_");
  // var newStr = str.replace(/-/g, "_");  -> for the dash only
  return newStr;
}

alert(kebabToSnake("my-snack-is-good"));

alert(kebabToSnake("your-snack-is-bad"));
alert(kebabToSnake("is this a kebab?"))
























