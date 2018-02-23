/*
console.log(a);
sayHi();

var a = 'hello munene!';

function sayHi(){
	console.log('helloo!');
}
*/


/*
function a(){

	function b(){
		console.log(this, myVar);
	}
	var myVar = 2;
	b();
}

var myVar = 1;
a();


function c(){
	for(let i = 0; i < 10; i++){
		// do stuff
	}
	console.log(i);

}

function d(){
	for(var i = 0; i < 10; i++){
		// do stuff
	}
	console.log(i);
}

c();
d();*/

/*

function waitThreeSecs(){
	var ms = 3000 + new Date().getTime();
	while(new Date < ms){}
	console.log('waited three secs!');
}

document.addEventListener('click', () => {
	console.log('click event!');
});

waitThreeSecs();

console.log('execution complete!')
*/

/*
var a = 3 + 4 * 5;
console.log(a);
*/

/*
var a = 2, b = 3, c = 4;

a = b = c;

console.log(a);
console.log(b);
console.log(c);
*/

/*
var a = 1 + '2';
console.log(a);
*/
/*
console.log(3 < 2 < 1); // true

function greet(name){
	name = name || '<YOUR NAME HERE>';
	console.log('hello ' + name);
}

greet();
greet('Munene');
*/

/*
console.log(libName); // lib2

function greet(){
	console.log('hello!');
}

greet.language = 'english';

console.log(greet.language); // english

*/
/*
greet();

function greet(){
	console.log('Hi!');
}

anonymousGreet();

var anonymousGreet = function(){
	console.log('Hi!');
}

function log(a){
	a();
}

log(function(){
	console.log('logged func');
});

*/

/*
var a = 3;
var b;

b = a;

console.log(a); // 3
console.log(b); // 3

a = 2;

console.log(a); // 2
console.log(b); // 3



var c = { greeting: 'hello' };
var d;

c = d;

console.log(c); // { greeting: 'hello' }
console.log(d); //  { greeting: 'hello' }

c.greeting = 'hola!';

console.log(c); // { greeting: 'hola!' }
console.log(d); //  { greeting: 'hola!' }

function changeGreeting(obj){
	obj.greeting = 'heyyy :)';
}

changeGreeting(d);

console.log(c); // { greeting: 'heyyy :)' }
console.log(d); //  { greeting: 'heyyy :)' }

*/

/*

function a(){
	console.log(this);
	this.greeting = 'hello'; // Window
}

a();

var b = function(){
	console.log(this); // Window
}

var c = {
	name: 'Munene',
	log: function(){
		console.log(this); // c = { ... }
		this.name = "munesh";

		console.log(this); // c = { name: 'munesh', ... }

		var setName = function(newName){
			console.log(this);
			this.name = newName;
		}.bind(this);

		setName('Munens K.');

		console.log(this) // c = { name: 'munesh', ... }
	}
};

c.log();

var d = {
	name: 'Munene',
	logEffectively: function(){
		var self = this;

		console.log(this);  // c = { ... }
		this.name = 'Yo mama';

		console.log(this); // c = { name: 'Yo mama', ... }

		var setName = function(newName){
			self.name = newName;
		}

		console.log(this);

	}
}

//d.logEffectively();

*/
/*
function greet(firstname = 'Munene', lastname, language, ...other){

	if(arguments.length == 0){
		console.log('no arguments!');
		console.log('--------');
		return;
	}

	console.log(arguments);
	console.log(arguments[0]);
	console.log(firstname);
	console.log(lastname);
	console.log(language);
	console.log('--------');
}

greet();
greet('Munene');
greet('Munene', 'Kaumbutho');
greet('Munene', 'Kaumbutho', 'ki');

*/

/*
function greet(){
	return {
		firstname: 'Munene'
	};
}

console.log(greet()); // { firstname: 'Munene' }
*/ 
/*
var 
	// firstname of the person
	firstname, 
	
	// the last name of the person
	lastname, 
	
	// the langiage that the person speaks that is in additon,
	// to english if necessary:
	language;


function getPerson(){
	return {
		// firstname to be returned from above:
		firstname: firstname,

		// lastname to be returned from above:
		// - a person that is 5 ft tall or above (preferrably).
		lastname: lastname,

		// the language that the person speaks.
		// - must have something to do with Wakanda
		language: language
	}
}
*/

/*
function greet(name){
	console.log('1. hello ' + name);
}

(greet)();

(function(name){
	console.log('1. hello ' + name);
})('Munesh 2!');

var greetFunc = function(name){
	return '2. hello ' + name;
}('Munesh!'); 

console.log(greetFunc) // '2. hello Munesh!

*/
/*
var greeting = 'hello!';

(function(global, name){
	console.log(name); // 'MK2'

	console.log(greeting); // undefined

	var greeting = 'You guy?';
	console.log(greeting); // 'You guy?'
	
	console.log(global.greeting); // 'hello!'

}(window, 'MK2'))

console.log(greeting); // 'hello!'

*/
/*

function greet(whattosay){
	return function(name){
		console.log(whattosay + ' ' + name); // 'Vipi Munesh' 
	}
}

greet('Vipi')('Munesh');

// is the same as:
var sayHi = greet('Vipi');
sayHi('Munesh!'); // 'Vipi Munesh' 

*/

/*
function buildFunctions(){
	var arr = [];

	for(var i = 0; i < 3; i++){
		arr.push(function(){
			console.log(i);
		}); 
	}
	return arr;
}

var fs2 = buildFunctions();

fs[0](); // 3
fs[1](); // 3
fs[2](); // 3


function buildFunctions2(){
	var arr = [];

	for(var i = 0; i < 3; i++){
		arr.push(
			(function(j){
				return function(){
					console.log(j);
				}
			}(i))); 
	}

	return arr;
}

var fs2 = buildFunctions2();

fs2[0](); // 1
fs2[1](); // 2
fs2[2](); // 3

*/

/*
function greet(language){
	return function(firstname, lastname){
		if(language == 'en'){
			console.log('hello ' + firstname + ' ' + lastname);
		}

		if(language == 'es'){
			console.log('hola ' + firstname + ' ' + lastname);
		} 
	}
}

greet('en')('Munene', 'Kaumbutho'); // 'hello Munene Kaumbutho'
greet('es')('Munene 2', 'Kaumbutho 2'); // 'hola Munene 2 kaumbutho 2'


var setTimeout = (function(func, time){
	func();
}(func, time));

*/


var person = {
	firstname: 'Munene',
	lastname: 'Kaumbutho',
	getFullName: function(){
		return 'My name is ' + this.firstname + ' ' + this.lastname;
	}
}

console.log(person.getFullName.apply({
	firstname: 'Jaymo',
	lastname: 'Yule mse'
})); // ' My name is Jaymo Yule mse

function logName(lang1, lang2){
	console.log('Logged: ' + this.getFullName()); // 'Logged: My name is Munene Kaumbutho'
	console.log('arguments: ', arguments); // ['swahili', 'shona']
}

/*
var logPersonName = logName.bind(person);
logPersonName('swahili', 'shona');

// is the same as:

var logName = function(lang1, lang2){
	console.log('Logged: ' + this.getFullName()); // 'Logged: My name is Munene Kaumbutho'
	console.log('arguments: ', arguments); // ['swahili', 'shona']
}.bind(this);

logName();

*/

/*
logName.call(person, 'en', 'es'); // 'Logged: My name is Munene Kaumbutho'
logName.apply(person, ['en', 'es']); // ['swahili', 'shona']

(function(){
	console.log(this); // { firstname: 'Munene', ... }
	console.log('arguments: ', arguments); // ['swahili', 'shona']
}).apply(person, ['en', 'es'])

console.log(person.getFullName.apply({
	firstname: 'Jaymo',
	lastname: 'Yule mse'
})); // ' My name is Jaymo Yule mse'


function multiply(a, b){
	return a*b;
}

console.log(multiply(2, 3));

var multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(3)) // 6

var multiplyByThree = multiply.bind(this, 3);
console.log(multiplyByThree(4)) // 12

var multiplyByFourByFour = multiply.bind(this, 4, 4);
console.log(multiplyByFourByFour(5, 7)) // 16
*/

/*
var arr = [ 1, 2, 3 ];

function mapForEach(arr, fn){
	var newArr = [];
	for(var i = 0; i < arr.length; i++){
		newArr.push(fn(arr[i]));
	}
	return newArr;
}

var arr2 = mapForEach(arr, function(item){
	return item * 2;
});
console.log(arr2); // [2, 4, 6]

var arr3 = mapForEach(arr, function(item){
	if(item > 2){
		return item; 
	}
})
console.log(arr3); // [3]

function checkPastLimit(limiter, item){
	return item > limiter;
}

var arr5 = mapForEach(arr2, checkPastLimit.bind(this, 1));
console.log(arr5); // [false, true, true]

function checkPastLimitSimplified(limiter){
	return function(item){
		return item > limiter;
	};
}

function checkPastLimitSimplified2(limiter){
	return function(limiter, item){
		return item > limiter;
	}.bind(this, limiter);
}

var arr6 = mapForEach(arr, checkPastLimitSimplified2(2)); 
console.log(arr6); // [false, false, true]

*/

var person = {
	firstname: 'DEFAULT',
	lastname: 'DEFAULT',
	getFullName: function(){
		return this.firstname + ' ' + this.lastname;
	}
}

var munene = {
	firstname: 'Munene',
	lastname: 'Kaumbutho'
}

var munesh = {
	firstname: 'munesh'
}

// DONT EVER DO THIS!!!!

munene.__proto__ = person;
console.log(munene.getFullName()); // Munene Kaumbutho
console.log(munene.firstname); // Munene


munesh.__proto__ = person;
console.log(munesh.firstname); // munesh
console.log(munesh.getFullName()); // munesh DEFAULT


