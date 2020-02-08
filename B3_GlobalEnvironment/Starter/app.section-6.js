
/*
// lec. 57

function Person () {

  console.log('initial: ', this); // intial: Person {}

  this.firstName = 'Munene';
  this.lastName = 'Kaumbutho';

  console.log('final: ', this); // final: Person {firstName: "Munene", lastName: "Kaumbutho"}
}

const person = new Person();
console.log(person); // Person {firstName: "Munene", lastName: "Kaumbutho"}


function Person (firstName, lastName) {

  console.log('initial', this); // initial: Person {}

  this.firstName = firstName;
  this.lastName = lastName;

  console.log('final', this); // final: Person {firstName: "Munene", lastName: "Kaumbutho"}
}

const munene = new Person('Munene', 'Kaumbutho');
console.log(munene); // Person {firstName: "Munene", lastName: "Kaumbutho"}

*/

/*
// lec. 58

function Person (firstName, lastName) {

  console.log('initial', this); // initial: Person {}

  this.firstName = firstName;
  this.lastName = lastName;

  console.log('final', this); // final: Person {firstName: "Munene", lastName: "Kaumbutho"}
}

Person.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
}

var person = new Person('Munene', 'Kaumbutho');
console.log(person.getFullName()); // Munene Kaumbutho

var munene = new Person('Munesh', 'Kaumbutho');
console.log(munene.getFullName()); // Munesh Kaumbutho

Person.prototype.getFormalFullName = function () {
  return this.lastName + ", " + this.firstName;
}

console.log(person.getFormalFullName()); // Kaumbutho, Munene
console.log(munene.getFormalFullName()); // Kaumbutho, Munesh

*/

// lec. 59:

function Person (firstName, lastName) {

  console.log('initial', this); // initial: Person {}

  this.firstName = firstName;
  this.lastName = lastName;

  console.log('final', this); // final: Person {firstName: "Munene", lastName: "Kaumbutho"}
}

var person = Person('Munene', 'Kaumbutho');
console.log(person); // undefined
console.log(person.getFullName()); // Uncaught TypeError: Cannot read property 'getFullName' of undefined

Person.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
}
