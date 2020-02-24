// ******************************
// Video 39 - JS Hoisting
// ******************************

/*
// functions
calculateAge(1970);

function calculateAge(year) {
    console.log(2020 - year);
}


//retirement(1970);   // This does not work with expression functions

var retirement = function(year) {
    console.log(65 - (2020 - year));
}

retirement(1970);


// Variables
console.log(age);   // This shows undefined because hoisting sets all variables undefined and then are filled in at execution time.
var age = 23;
console.log(age);

function foo() {
    console.log(age);   // undefined because there is a local copy but this is used before that copy is given a value.
    var age = 65;
    console.log(age);
}
foo();
console.log(age);
*/



// ******************************
// Video 40 - JS Scoping
// ******************************

/*
var a = 'Hello!';
first();

// Scope chain - see variables up the chain.
function first() {
    var b = 'Hi!';
    second()

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);     // Hello!Hi!Hey!
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);     // unable to access b and c.
}
*/



// ******************************
// Video 41 & 42 - this
// ******************************

console.log(this);      // Window object

calculateAge(1985);

function calculateAge(year) {
    console.log(2020 - year);
    console.log(this);  // Window object because this function is called by the window object
}

var john = {
    name: "John",
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);  // returns the object john
        console.log(2020 - this.yearOfBirth);

        function innerFunction() {
            console.log(this);
        }
        innerFunction();

    }

}

john.calculateAge();


var mike = {
    name: "Mike",
    yearOfBirth: 1984
};

// Method borrowing
mike.calculateAge = john.calculateAge;
mike.calculateAge();
