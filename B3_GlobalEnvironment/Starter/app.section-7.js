// lec. 66:
var a = 5;

var b = 'string';

var c = {};

console.log(typeof a); // number

console.log(typeof b); // string

console.log(typeof c); // object

function Person(name) {
  this.name = name
}

var p = new Person('Munene');

console.log(typeof p); // object
console.log(Person); // ƒ Person(name) { this.name = name}

var d = [];

console.log(typeof d); // object
console.log(Object.prototype.toString.call(d)) // [Object Array]

var e = function() {};
console.log(typeof e); // function

var f = undefined;
console.log(typeof f); // undefined

var g = null;
console.log(typeof f); // object

// instanceof:

console.log(p instanceof Person); // true
