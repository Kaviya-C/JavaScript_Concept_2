// function
function greet() {
  console.log("Good Morning");
}

greet();

// i want to return something whom calling this specifice function then use return statement

// multiple return statement is not allowed

function greeting() {
  return "Have a beautiful day";
}
let greets = greeting();
console.log(greets);

// i want to pass some value..
// call the function with passing value
function greet(user) {
  return `Hello ${user} have a wonderful day today..`;
}
let users = greet("Kaviya");
console.log(users);

// we can able to pass multiple values,..

// -----------------Function Expression --------------

// lets treat function as an expression
// what is expression [ let r=9+8+8 ]
// javascript treats function as an object
// primitive datatypes  >>number, string, boolean, null, undefined, symbol.

// object datatypes  >> function

// below is the anonymous function
let add = function (num1, num2) {
  return num1 + num2;
};
// this function having no name how can we call we call by using the variable add

let result = add(56, 7);
console.log(result);

// assign this add to some other variable
let sum = add;
let result1 = sum(99, 21);
console.log(result1);
