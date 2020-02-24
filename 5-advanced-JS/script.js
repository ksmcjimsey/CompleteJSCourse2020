// Video 61 - Function constructor

/*
// Literal object
var john = {
    name: "John",
    yearOfBirth: 1990,
    job: "techer"
};

// function constructor
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function () {
        console.log (2020 - this.yearOfBirth);
        return (2020 - this.yearOfBirth);
    }
}

// instansiation of Person object (class?)
var john = new Person ("John", 1990, "teacher");
var jane = new Person("Jane", 1969, "designer");
var mark = new Person("Mark", 1948, "retired");

// // Inheritance - Adding using a prototype
Person.prototype.yearUntilRetirement = 
    function () {
    console.log(65 - this.calculateAge());
};

// Proto type property
Person.prototype.lastName = "Smith";


// Using objects and functions from above
console.log("Calling john.calculateAge() and yearsUntilRetirement");
console.log(john.name + " " + john.lastName);
john.calculateAge();
john.yearUntilRetirement();

console.log("Calling jane.calculateAge() and yearsUntilRetirement");
console.log(jane.name + " " + jane.lastName);
jane.calculateAge();
jane.yearUntilRetirement();

console.log("Calling mark.calculateAge() and yearsUntilRetirement");
console.log(mark.name + " " + mark.lastName);
mark.calculateAge();
mark.yearUntilRetirement();
*/


// Creating Objects using Object.create method

/*
var personProto = {
    calculateAge: function() {
         console.log (2020 - this.yearOfBirth);
    return (2020 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = "John";
john.yearOfBirth = 1990;
john.job = "teacher";

var jane = Object.create(personProto, 
{
    name: { value: "Jane" },
    yearOfBirth: { value: 1969},
    job: { value: "designer"}
});
*/


// Primatives versus Objects.
// Objects variables contains a reference to where the variables are stored

/*
// Primiatives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

// objects
var obj1 = {
    name: "John",
    age: 26
}

var obj2 = obj1;
console.log(obj1);
console.log(obj2);

// obj2 is the exact same object as obj1
obj1.age=30;
console.log(obj1);
console.log(obj2);

// Functions
var age = 27;
var obj = {
    name: "Jonas",
    city: "Lisbon"
};

function change(a, b) {
    a = 30;
    b.city = "San Francisco";
}

// age is not changed so it must be pass by value
// primatives are passed by value but ojects are passed by reference
change (age, obj);
console.log(age);
console.log(obj.city);
*/



// Video 65 - Functions and passing functions as arguments
// Functions are objects in JS - instance of the Object type
// Can store as variable, pass as arguments, and return from other functions
// JS has "First Class" functions

/*
var years = [1990, 1965, 1937, 2005, 1998];

// pass in an array and a function to do a calculation
// crazy stuff going on here.
function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push( fn(arr[i]) );
    }
    return arrRes;
}

// Callback function
function calculateAge(el) {
    return 2020 - el;
}

ages = arrayCalc(years, calculateAge);
console.log(ages);


function isFullAge(el) {
    return el >= 21;
}

fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);


function calcMaxHR(el) {
    if (el >= 18 && el <= 81) {
        return Math.round ( 206.9 - (0.67 * el) );
    } else {
        return -1;
    }
}

maxHeartRates = arrayCalc(ages, calcMaxHR);
console.log(maxHeartRates);
*/



// Video 66 - functions returning functions
/*
function interviewQuestions(job) {
    if (job === "designer") {
        return function(name) {
            console.log (name + ", can you please explain what UX design is?");
        }
    } else if (job === "teacher") {
        return function(name) {
            console.log("What subject do you teach, " + name + "?");
        }
    } else {
        return function(name) {
            console.log("Hello " + name + ", what do you do?");
        }
    }
}

var teacherQuestion = interviewQuestions("teacher");
teacherQuestion("John");

var designerQuestion = interviewQuestions("designer");
designerQuestion("Mary");
designerQuestion("Mark");
designerQuestion("Peter");

interviewQuestions("teacher")("Laura");
*/


// Video 67 - Common pattern in JS: Immediately Invoked Function Expression (IIFE)

/*
function game() { 
    var score = Math.random() * 18;
    console.log(score > 5);
}
game();
//console(score); // not seen


// IIFE - data privacy (new scope) - runs right away
(function () {
    var score = Math.random() * 18;
    console.log(score > 5);
})();
//console(score); // not seen


(function (goodLuck) {
    var score = Math.random() * 18;
    console.log(score > 5 - goodLuck);
})(3);  // passes the 3 to goodLuck
*/


// Video 68 - Closures
function retirement(retirementAge) {
    return function(yearOfBirth) {
        var a = " years left until retirement.";
        var age = 2020 - yearOfBirth;
        console.log( (retirementAge - age) + a);
    }
}

// An inner function always has access to variables in the outer function.
// Even after the outer function has returned.  Even after the execution context
// is gone the variables are still there.
var retirementUS = retirement(66);
retirementUS (1970);

retirement(66)(1990);

var retirementGermany = retirement(65);
var retirementIceland = retirement(67);


retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);


/*
// returning anonymous functions
function interviewQuestions(job) {
    if (job === "designer") {
        return function(name) {
            console.log (name + ", can you please explain what UX design is?");
        }
    } else if (job === "teacher") {
        return function(name) {
            console.log("What subject do you teach, " + name + "?");
        }
    } else {
        return function(name) {
            console.log("Hello " + name + ", what do you do?");
        }
    }
}
*/


// Using closures
function interviewQuestions(job) {
    return function(name) {
        if (job === "designer") {
            console.log (name + ", can you please explain what UX design is?");
        } else if (job === "teacher") {
            console.log("What subject do you teach, " + name + "?");
        } else {
            console.log("Hello " + name + ", what do you do?");
        }
    }
}

// interviewQuestions returns a function and then
// parent function goes away but leaves the variables so we can pass
// John in to the inner function because it stays around.
interviewQuestions("teacher")("John");





