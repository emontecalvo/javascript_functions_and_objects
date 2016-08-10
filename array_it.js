// For Loop

var colors = ["red", "orange", "yellow", "green"];

for(var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// For Each = most popular, but not always about to use
// not available in JavaScript until 2009-ish
var colors2 = ["indigo", "purple", "fuscia", "toupe"];

colors2.forEach(function(color){
  console.log(color);
});

//while loop

var count = 0;
while(count < colors2.length) {
  console.log(colors2[count]);
  count++;
}

/// EXERCISE:
// what does the following code print out?
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var colors3 = ["red", "orange", "yellow", "green"];

numbers.forEach(function(color){
  if(color % 3 === 0) {
    console.log(color);
  }
});
// answer:  3, 6, 9



for(var i = 0; i < numbers.length; i++){
  if(numbers[i] % 3 === 0){
    console.log(numbers[i]);
  }
}


var counter = 0;
while(counter < numbers.length) {
  if(numbers[counter] % 3 === 0){
    console.log(numbers[counter]);
  }
  counter++;
}






