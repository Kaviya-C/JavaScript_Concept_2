// local variable and global variable
let num = 10;
// this is global variable

function startNow() {
  console.log(num);
  let value = "Hey Kaviya What's up!! ";
  console.log(value);
}
// console.log(value);// we can't access the local variable outside the block so we got err on this line

startNow();

//-------------------------------------------------------

function add(n1, n2, n3) {
  return n1 + n2 + n3;
}
let result = add(94, 6, 31);
console.log(result);

// if we giving only 2 value 3 value is not passed then we got NaN as output bcoz third value is undefined

function adding(num1, num2, num3 = 1) {
  return num1 + num2 + num3;
}
let last = adding(23, 4);
// if we are not assigning the third value then we can use that value as 1 to avoid the output of NaN
console.log(last);
// this default value num3 is only applicable if we are not passing no value to the third variable..
