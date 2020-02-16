
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

/*
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
*/

/*
// lec. 60:

// create a number:
var a = new Number(3);

// create a string:
var b = new String('munesh');

String.prototype.isLengthGreaterThan = function (limit) {
  return this.length > limit;
}

console.log(b.isLengthGreaterThan(3)); // true
*/


// lec. 61:
/*
var a = 3;

var b = new Number(3);

console.log(a == b); // true

var c = Number("3") // 3

console.log(a === b); // false
*/

// lec. 62:

/*
Array.prototype.isArrayLongerThan = function (limit) {
  return this.length > limit
}

var arr = ['Munene', 'Munesh', 'MK'];

var arr2 = new Array('Munene', 'Munesh', 'MK');

console.log(arr.isArrayLongerThan(2), arr2.isArrayLongerThan(1)); // true true

console.log({arr, arr2});

for (prop in arr) {
  console.log(typeof prop, prop + ': ' + arr[prop]);
}

var descriptor = Object.getOwnPropertyDescriptor({bog: 'i'}, 'bog');
console.log(descriptor);

*/

// lec. 63:
/*
var person = {
  firstname: 'Default',
  lastname: 'Default'
};

var munene = Object.create(person);
console.log(munene);

console.log(munene.firstname, munene.lastname); // DEFAULT DEFAULT

// overriding:
munene.firstname = 'Munene';
munene.lastname = 'Kaumbutho';

// we only want to create a polyfill for Object.create if it doesnt exist in the browser:
if (!Object.create) {

  Object.create = function(o) {
    if (arguments.length) {
      throw Error('This object takes in a single property');
    }

    // purpose of this function is to return an object whose prototype is the value of what
    // is passed in:

    // create a function such that when it is called as a function constructor it may return
    // an object whose prototype is the value of what is passed in.
    const f = function() {};
    f.prototype = o;

    // using a function constructor here is good because just like the normal Object.create
    // function we want the first level prorotype to be the value of what is passed in above.

    // initiate object returned by calling function constructor:
    const obj = new f();

    return obj;
  }
}
*/

// lec. 64

function Person (firstname, lastname) {

  this.firstname = firstname;
  this.lastname = lastname;

  this.greet = function () {
    return 'Hello, ' + this.firstname;
  }
}

const munene = new Person('Munene', 'Kaumbutho');

console.log(munene); // Person {firstname: "Munene", lastname: "Kaumbutho", greet: ƒ}
console.log(munene.greet()) // Hello, Munene

/*
class Person {

  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  greet() {
    return `Hello, ${this.firstname}`;
  }
}

const munesh = new Person('Munesh', 'Kaumbutho');
console.log(munesh); // Person {firstname: "Munesh", lastname: "Kaumbutho", greet: ƒ}
console.log(munesh.greet()) // Hello, Munene
*/

class InformalPerson extends Person {
  constructor(firstname, lastname) {
    super(firstname, lastname);
  }

  greet2() {
    return `Hello, ${this.firstname}`;
  }
}

const mk = new InformalPerson('Munizle', 'Kaumbutho');
console.log(mk)
