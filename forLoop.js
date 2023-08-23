//for loop
for (let index = 1; index <= 5; index++) {
  console.log("Hi >> " + index);
  for (let sec = 1; sec <= 5; sec++) {
    console.log("Kaviya..." + sec);
  }
}
//----------------Best loop-----------------

// // based on the requirement loop can be used
// // if we know the start and end value then good to go with for loop
// // if we don't know the end values then good to go with while loop

console.log("Divisible by 3...........");
let div = 3;
for (let num = 1; num <= 100; num++) {
  if (num % 3 === 0) {
    //1
    console.log(`divisible by 3 ${num}-----`);
  } else {
    console.log(`Not divisible ${num}`);
  }
}

//----------------------------------------------------
let n = 12345;
let original = n;
let rem;
// console.log(original%10);
let reverse = "";
while (original > 0) {
  rem = original % 10; //12345%10==5
  console.log(rem); //5
  original = parseInt(original / 10); //1234
  reverse += rem;
}
console.log(reverse);
