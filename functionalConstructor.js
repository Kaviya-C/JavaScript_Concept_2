// functional constructor in js

function Alien(username, technical) {
  this.name = username;
  this.techno = technical;
  // return this; // this line is there but it is hidden
}
// constructor function starts with capital letter
// normal function starts with small letter

let alien1 = new Alien("Geetha", "JavaScript");
console.log(alien1);
let alien2 = new Alien("Kaviya", "Java");
console.log(alien2);

alien1.techno = "Doctor";
console.log(alien1);

function Alien1(firstName, technology) {
  this.name = firstName;
  this.tech = technology;

  this.work = function () {
    console.log(
      "Solving Problem finding solution practising myself to handle everything independently"
    );
  };
  return 7;
}
let a = new Alien1("Kavi", "FullStackDeveloper");
console.log(a);
a.work();
