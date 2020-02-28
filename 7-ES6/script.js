// Video 104 - let and const
//
// ES5 code
/*
var name5 = "Jane Smith";
var age5 = 23;
name5 = "Jane Miller";
console.log(name5);

// ES6
const name6 = "Jane Smith";
let age6 = 23;
//name6 = "Jane Miller";  // can not do in ES6 as const is immutable 
console.log(name6)
*/


// var is function scoped and let is block scoped
// ES5
/*
function driverslicense5(passedTest) {
    if (passedTest) {
        console.log(firstName);     // Gives an undefined output.
        var firstName = "John";
        var yearOfBirth = 1990;
    }
    
    console.log(firstName + " born in " + yearOfBirth + " is now officially allowed to drive a car.");
}

driverslicense5(true);


// Video ES6
/*
function driverslicense6(passedTest) {
    if (passedTest) {
        let firstName = "John";
        const yearOfBirth = 1990;
    }
    
    // Doesn't work because firstName and yearOfBirth are block scoped and not availble to this loging.
    console.log(firstName + " born in " + yearOfBirth + " is now officially allowed to drive a car.");
}

driverslicense6(true);
*/


// ES6 fix is to declare variables outside of the block
/*
function driverslicense6(passedTest) {
    
    //console.log(firstName);     // This gives an error (temperal dat zone).
    let firstName;
    const yearOfBirth = 1990;
    
    if (passedTest) {
        firstName = "John";
    }
    
    // Doesn't work because firstName and yearOfBirth are block scoped and not availble to this loging.
    console.log(firstName + " born in " + yearOfBirth + " is now officially allowed to drive a car.");
}

driverslicense6(true);


// 
let i = 23;

for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);
*/



// Video 105 - Blocks and IIFEs

/*
{
    const a = 1;
    let b = 2;
}

console.log (a, b);     // Gives error because block scope


// IIFE in ES5
(function() {
    var c = 3;
})()

// IIFE in ES6
{
    let c = 3;
}
*/


// Video 106 - ES6 string changes
/*

let firstName = "John";
let lastName = "Smith";
const yearOfBirth = 1990;

function calcAge(year) {
    let curYear = new Date().getFullYear();
    return curYear - year;
}

console.log(calcAge(1970));

console.log("This is " + firstName + " " + lastName + ".  He was born in "
            + yearOfBirth + ". Today, he is " + calcAge(yearOfBirth) + " years old.");

// ES6 Temperal litterals
console.log (`This is ${firstName} ${lastName}.  He was born in ` +
              `${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);

// ES6 String methods
const n = `${firstName} ${lastName}`;
console.log (n.startsWith("Jo") );
console.log (n.endsWith("th") );
console.log (n.includes("n S") );
console.log (n.repeat(5) );     // Repeat the string
console.log (`${n}  `.repeat(5) );  // To get spaces between names.
*/


// Video 107 - Arrow functions: basic

/*
const years = [1990, 1965, 1982, 1937];

// ES5
let curYear = new Date().getFullYear();
var ages5 = years.map(function(el) {
    return curYear - el;
});
console.log(ages5);


// ES6
// next el to put in ages6 array is curYear minus the current el.
let ages6 = years.map(el => curYear - el);
console.log(ages6);


ages6 = years.map ( (el, index) => `Age element ${index + 1}: ${curYear - el}`);
console.log(ages6);

ages6 = years.map ( (el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    
    return `Age element ${index + 1}: ${age}.`
});
console.log(ages6);
*/


// Video 108 - Lexical "this" keyword
//
// Arrow functions do not have their own this but use the functions which contain them

// ES5 version
//               
/*
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        
        var self = this;    // needed for ES5 as this function does not have access to other values
        
        document.querySelector(".green").addEventListener("click", function() {
            var str = "This is box number " + self.position + " and it is " + self.color;
            alert(str);
        });
    }
}

box5.clickMe();
*/


/*
// ES6 - arrow functions have access to surounding "this" values
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        
        document.querySelector(".green").addEventListener("click", 
        ()=> {
            var str = "This is box number " + this.position + " and it is " + this.color;
            alert(str);
        });
    }
}

box6.clickMe();


// This does not work becasue the upper arrow function no longer has its own "this"
// keyword.  
const box66 = {
    color: 'green',
    position: 1,
    clickMe: ()=> {
        
        document.querySelector(".green").addEventListener("click", 
        ()=> {
            var str = "This is box number " + this.position + " and it is " + this.color;
            alert(str);
        });
    }
}

//box66.clickMe();


// ES5 - missing names
function Person(name) {
    this.name = name;
}

Person.prototype.myFriends5 = function (friends) {
    
    var arr = friends.map(function(el) {
       return this.name + " is friends with " + el; 
    }.bind(this));      // Needed the bind to make sure a copy with keyword 
    
    console.log(arr);
}

var friends = ["Bob", "Jane", "Mark"];
new Person("John").myFriends5(friends);


// ES6 version
Person.prototype.myFriends6 = function (friends) {
    
    var arr = friends.map(el => `${this.name} is friends with ${el}`); 
       
    console.log(arr);
}

new Person("Mike").myFriends6(friends);
*/


// Video 109 - Destructuring

/*
// ES5
var john = ["John", 26]
var name = john[0];
var age = john[1];

// ES6
const [name2, age2] = ["John", 26];
console.log(name2, age2);


const obj = {
    firstName: "John",
    lastName: "Smith"
};

// deconstruct object
const {firstName, lastName} = obj;
console.log(firstName, lastName);

// another deconstruct
const {firstName: a, lastName: b} = obj;
console.log(a, b);

// deconstructur in function
function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

let [age3, retirement] = calcAgeRetirement(1970);
console.log(age3, retirement);
*/


// Video 110 - ES6 Arrays


/*// Returns a node list
const boxes = document.querySelectorAll(".box");    // Get the three boxes

// ES5 Turn node list into an array
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function (cur) {
   cur.style.backgroundColor = 'dodgerblue'; 
});

//ES6 method - uses Array's new "from" method
Array.from(boxes).forEach(cur => cur.style.backgroundColor = "deeppink");


// ES5 must use a for loop to break out of the loop as forEach and Map do not allow this
for (var i = 0; i < boxesArr5.length; i++) {
    if (boxesArr5[i].className === 'box blue') {
        continue;
    }
    
    boxesArr5[i].textContent = "I changed to blue!";
}


// ES6 new loop, for of, which is like for and forEach combined
const boxesArr6 = Array.from(boxes);
for (const cur of boxesArr6) {
    if (cur.className.includes("blue") ) {
        continue;
    }
    
    cur.textContent = "I changed to pink!";
}

// ES5 compare each value to a condition
var ages = [12, 17, 8, 21, 14, 11];
var full = ages.map(function (cur) {
   return cur >= 18; 
});
console.log(ages, full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

// ES6 new array methods
console.log (ages.findIndex(cur => cur >= 18) );    // cur => cur >= 18 is saying I'm a function returning values >= 18.
console.log (ages.find(cur => cur >= 18) ); */



// Vidoe 111 - The spread Operator

/*
function addFourAges (a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18, 30 , 12, 21);
console.log (sum1);

// ES5
var ages = [18, 30, 12, 21];

// take the function and apply the array values to it.
var sum2 = addFourAges.apply(null, ages)
console.log (sum2);

// ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

// spread with strings
const familySmith = ["John", "Jane", "Mark"];
const familyMiller = ["Mary", "Bob", "Ann"];
const bigFamily = [...familySmith, "Lily", ...familyMiller];
console.log(bigFamily);

// Works on arrays and node lists
const h = document.querySelector("h1");     // Select by element
const boxes = document.querySelectorAll(".box");
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = "purple");
*/



// Video 112 - Rest Parameters - creates an array from multiple parameters

/*
 ES5
function isFullAge5 () {
    console.log(arguments);     // special value that takes any number of arguments
    
    // arguents are not an array so we have to convert it.
    var argsArr = Array.prototype.slice.call(arguments);
    
    argsArr.forEach(function (cur) {
       console.log( (2020 - cur) >= 18 ); 
    });
}

// May add as many arguements as we want.
isFullAge5(2003, 1999, 1965);
isFullAge5(1990, 1999, 1965, 2016, 1987);


// ES6
// the ... will transform the arguments into an array with a name of years
function isFullAge6(...years) {
    years.forEach(cur => console.log( (2020 - cur) >= 18 ) );
}

isFullAge6(2003, 1999, 1965);
isFullAge6(1990, 1999, 1965, 2016, 1987);
*/


// convert arguments to array but skip other parameters
/*function isFullAge5 (limit) {
    
    // special value that takes any number of arguments
    console.log("Arguments as they are entered: ");
    console.log(arguments);
    console.log("Value of limit: " + limit);
    
    // arguents are not an array so we have to convert it.
    // the , 1 tells slice to start at the second argument.
    var argsArr = Array.prototype.slice.call(arguments, 1);
    console.log("argsArr after slice: " + argsArr)
    
    argsArr.forEach(function (cur) {
       console.log( (2020 - cur) >= limit ); 
    });
}

// May add as many arguements as we want.
isFullAge5(21, 2003, 1999, 1965);
isFullAge5(18, 1990, 1999, 1965, 2016, 1987);


// ES6
// the ... will transform the arguments into an array with a name of years
// Adding other arguments is easy peasy with rest parameter.
function isFullAge6(limit, year, ...years) {
    console.log("Limit: " + limit + "  year: " + year + "  array:");
    console.log(years);
    years.forEach(cur => console.log( (year - cur) >= limit ) );
}

isFullAge6(21, 2020, 2003, 1999, 1965);
isFullAge6(18, 2020, 1990, 1999, 1965, 2016, 1987);*/





// Video 113 Default Parameters
//
// ES 5 - function constructor - Smith family member
/*function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
    
    // Set defaults
    lastName === undefined ? lastName = "Smith" : lastName = lastName;
    nationality === undefined ? nationality = "American" : nationality = nationality;
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

// Add a new Smith object called John and another called Emily
var john = new SmithPerson("John", 1990);   // We do not have to specify all the arguments
var emily = new SmithPerson("Emily", 1983, "Diaz", "Spanish");*/


// ES 6 Defaults
/*function SmithPerson(firstName, yearOfBirth, lastName = "Smith", nationality = "American") {
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
    
}

// Add a new Smith object called John and another called Emily
var john = new SmithPerson("John", 1990);   // We do not have to specify all the arguments
var emily = new SmithPerson("Emily", 1983, "Diaz", "Spanish");*/



// Video 114 Maps (use to use objects)
//

// Maps can have any key where objects must use strings

/*const question = new Map();
question.set('question', "What is the official name of the latested major JavaScript version");
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, "Correct answer :D");
question.set(false, "Wrong, please try again!");

// See what is in the map
console.log( question.get("question") );

console.log(question.size);

// check and delete
if (question.has(5)) {
    // Delete
    question.delete(5);
}

//question.delete(4);  // No error


// Clear the whole map
//question.clear();


// Can loop through maps
/*question.forEach( (value, key) =>
    console.log (`This is ${key}, and it's set to ${value}`) );*/


// Using entries returns all the key value pairs
// Destructuring
/*for (let [key, value] of question.entries()) {
    console.log (`This is ${key}, and it's set to ${value}`);
}*/

/*
for (let [key, value] of question.entries()) {
    if (typeof(key) === "number") {
        console.log (`Answer ${key}: ${value}`);
    }
}

const ans = parseInt ( prompt("Write the correct number to the answer") );
//console.log (ans, question.get('correct'));

// If the answer matches then return true or false and use the true or false
// as a key to get the message.
console.log ( question.get (ans === question.get('correct') ) );*/




// Video 115 - Classes: easier syntax for prototype
/*var Person5 = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

// Add a method to the function object above - done out here so it is
// only created once
Person5.prototype.calculateAge = function() {
    // Prototype can use values from the object using "this."
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var John5 = new Person5("John", 1980, "teacher");
John5.calculateAge();


// ES6 - class
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    // Can add methods in the class and they will not be repeated.
    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(this.age);
    }

    static greeting() {
        console.log("Hey there!");
    }
}

var Mark6 = new Person5("Mark", 1970, "programmer");
Mark6.calculateAge();
Person6.greeting();*/



// Video 116 - Classes with Subclasses and inheritance
//

// ES 5 - Super class
var Person5 = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

// Add a method to the function object above - done out here so it is
// only created once
Person5.prototype.calculateAge = function() {
    // Prototype can use values from the object using "this."
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

// Subclass of Athlete
var Athete5 = function(name, yearOfBirth, job, olympicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals
}

// proto of an Athlete will be Person5
Athete5.prototype = Object.create(Person5.prototype);

Athete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
}

var johnAthlete5 = new Athete5("John", 1980, "swimmer", 3, 10);
johnAthlete5.calculateAge();

johnAthlete5.wonMedal();



// ES6 inheritance
class Person6 {

    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    // Can add methods in the class and they will not be repeated.
    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

    static greeting() {
        console.log("Hey there!");
    }
}

class Athlete6 extends Person6 {

    constructor (name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

const markAthlete6 = new Athlete6("Mark", 1990, 'swimmer', 2, 7);
markAthlete6.calculateAge();
markAthlete6.wonMedal();






















