//Objects in JS

// it is an object
//in object we have collection of properties
let alien = {
  Name: "kaviya",
  Technology: "JavaScript",
};
console.log(typeof alien, alien);
// i want to print only the name of the alien not the whole details
console.log(alien.Name);
console.log(alien["Technology"]);
// we can access specific data by using dot operator or square bracket inside within single or double quotes

let aliens = {
  user: "Kavi",
  tech: "Java Developer",
  "work exp": 1,
  // in this work exp >> i have two word
  // we can represent this in  single quotes or underscore in the middle of the word
  // work_exp
  //' work exp'
  // if use single quotes then we can't use dot operator to access this particulary in that case we can use square bracket
};

console.log(aliens["work exp"]);

//lets assume the user giving input which he/she want the name field in the object in that case we can use [] this bracket

let input = "names";
let alienss = {
  names: "Ram",
  techno: "Developer",
};
console.log(alienss.input); // this will give u undefined in that case we can use square bracket

console.log(alienss[input]);

//object represents the real world entity
// inside object we have properties and also have some behaviour too that mean function or method

//------------------------complex object---------------

let people = {
  names: "Seetha",
  tech: "JavaScript",
};
console.log(people);

// having an object inside an object
let users = {
  names: "James Bond",
  tech: "Manager",
  laptop: {
    cpu: "intel core i5",
    ram: 16,
    brand: "Asus Vivobook",
  },
};

console.log(users);

console.log(users.laptop);
console.log(users.names + " and he is " + users.tech);
//if we want to fetch only specific technology
console.log(users.laptop.brand);
// i want to print length of the string
let length = users.laptop.brand.length;
console.log(length);

// imagine in this object there is no property like tech
// in that case we can use ? this symbol to avoid the lengthy errors instead of error we got one word that is undefined

let trial = {
  namest: "Farina",
  techno1: "QA Engineer",
};
// console.log(trial.namest+' , '+trial.techno.length);
// if the field techno is not available it gives undefined but when we perform any action to that undefined then we got lengthy errors i want to avoid this
console.log(trial.techno?.length);
// now we are not facing any error we got only undefined

// i want to delete some specific things in this users
console.log(users);
delete users.laptop;
console.log(users);

// i want to print the properties one by one which is present in object
// entire object can print directly .without using loop
// each property i want to print

let objectss = {
  objName: "Jira",
  objId: 90,
  techie: "Tester",
  Company: {
    role: "team lead",
    amount: 50_000,
    excel: "Good in communication skills",
  },
};
// for in loop
for (let key in objectss) {
  console.log(key, objectss[key]);
}

// if we want to print each property in laptop

for (let key in objectss.Company) {
  console.log(key, objectss.Company[key]);
}
