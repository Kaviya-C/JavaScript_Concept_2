// arrow function
// simplify the line of code
let greet = function () {
  console.log("Hey Whats up...");
  return 1;
};
console.log(greet());

// i dont want to mention this is function so we can use arrow function

let greets = () => {
  console.log("Have a awesome day");
  return "kaviya";
};
console.log(greets());

//if we have values inside function how to convert this as arrow function
let greetings = (names) => {
  console.log(`Hey ${names} u r really doing great`);
};

greetings("Kaviya");

// if we using arrow function  and only one value mean we don't need to use return keyword and contain only one statement then dont need to use curly braces

let powers = (number) => number * number;
console.log(powers(8));

//------------------------------------------------------

let task = (num1, num2) => {
  if (num1 >= 0 && num2 >= 0) {
    return num1 + num2;
  } else {
    return "Enter a valid input";
  }
};
console.log(task(2, -3));
