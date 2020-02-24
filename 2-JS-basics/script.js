// Video 6 - JS Hello World
//console.log('Hello World from External File!');

// Video 8 - Variables
/*
var firstName = 'Kevin';
var lastName = "Mc Jimsey";
var age = 49;

console.log(firstName + " " + lastName + " is " + age + " years old.");

var fullAge = true;  // false
console.log(fullAge);   // true

var job;
console.log(job);   // undefined

job = "Teacher";
console.log(job);   // Teacher
*/


// Video 9 - Mutation and Type Coercion
/*
var firstName = 'Kevin';
var lastName = "Mc Jimsey";
var age = 49;

// Type coercion is when age is changed from int to string automatically.
console.log(firstName + " " + lastName + " is " + age + " years old.");

var job, isMarried;     // two variables at once
job = "Programmer";        // two different types of variables declared at the same time.
isMarried = true;
console.log(firstName + " is a " + age + " year old " + job + ".  Is he married? " + isMarried);

// Variable mutation
age = "forty-nine";
job = "Web Programming";
alert(firstName + " is a " + age + " year old " + job + ".  Is he married? " + isMarried);

// Prompt
var lastName = prompt("What is his last name?");
*/


/*************************
Video 10 - Basic operators
*************************/
/*
var year, yearJohn, yearMark;
now = 2020;
ageJohn = 28;
ageMark = 33;

// Math Operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);
console.log(now + 2);
console.log(now * 2);
console.log(now / 2);

// Logical Operators
var johnOlder = ageJohn > ageMark;
console.log("John is older then Mark? " + johnOlder);
console.log("Mark is older then John? " + !johnOlder);

// type operator
console.log(typeof johnOlder);
console.log(typeof(ageJohn));
console.log(typeof (now / 3) );
var x;
console.log(x);
*/


/*****************************
Video 11 - Operator precedence
*****************************/
/*

var now, yearJohn, fullAge, isFullAge;
now = 2020;
yearJohn = 1989;
fullAge = 21;

isFullAge = now - yearJohn >= fullAge;
console.log("Is John full age? " + isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log("Average is: " + average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6;    // 8 * 4 - 6 => 32 - 6 => 26
console.log(x, y);

// More operators
console.log(x);
x = x * 2;
console.log(x);
x *= 2;
console.log(x);
x += 10;
console.log(x);
x = x + 1;
x += 1;
x++
console.log(x);
*/


/*******************************
Video 12 & 13 - Coding Challenge
*******************************/
/*

// BMI = mass / (height * height)
var johnsMass, marksMass, johnsHeight, marksHeight, johnsBmi, marksBmi, isJohnsBmiHeigher;

johnsMass = prompt("Please enter John's mass: ");
johnsHeight = prompt("Please enter John's Height: ");
marksMass = prompt("Please enter Mark's mass: ");
marksHeight = prompt("Please enter Mark's Height: ");

johnsBmi = johnsMass / (johnsHeight * johnsHeight);
marksBmi = marksMass / (marksHeight * marksHeight);

isJohnsBmiHeigher = johnsBmi > marksBmi;

alert("John's BMI, " + johnsBmi + " is larger then Mark's, " + marksBmi + " is: " + isJohnsBmiHeigher);
*/



/******************************
Video 14 - If / else statements
******************************/
/*

var firstName = "John";
var civilStatus = "single";

if (civilStatus === 'married') {
    console.log(firstName + " is married!");
} else {
    console.log(firstName + " is not married!");
}


var isMarried = true;
if (isMarried) {
    console.log(firstName + " is married!");
} else {
    console.log(firstName + " is not married!");
}


// BMI = mass / (height * height)
johnsMass = prompt("Please enter John's mass: ");
johnsHeight = prompt("Please enter John's Height: ");
marksMass = prompt("Please enter Mark's mass: ");
marksHeight = prompt("Please enter Mark's Height: ");

johnsBmi = johnsMass / (johnsHeight * johnsHeight);
marksBmi = marksMass / (marksHeight * marksHeight);

isJohnsBmiHeigher = johnsBmi > marksBmi;

if (isJohnsBmiHeigher) {
    alert("John's BMI is larger then Mark's. John's BMI is: " + johnsBmi + " and Mark's is: " + marksBmi);
} else {
    alert("John's BMI is smaller then Mark's. John's BMI is: " + johnsBmi + " and Mark's is: " + marksBmi);
}
*/


/***********************
Video 15 - Boolean Logic
***********************/
/*
var firstName = "John";
var age = 50;

if (age < 13) {
    console.log(firstName + " is a boy.");
} else if ( (age >= 13) && (age < 20) ) {  // Between 13 and 20
    console.log(firstName + " is a teenager.");
} else if ( (age >= 20) && (age < 30) ) {
    console.log(firstName + " is a young adult.");
} else {
    console.log(firstName + " is a adult.");
}
*/


/************************************************
Video 16 - Ternary Operator and Switch Statements
************************************************/

/*
var firstName = "John";
var age = 14;

age >= 21 ? console.log(firstName + " drinks beer.")
    : console.log(firstName + " drinks juice.");


var drink = age >= 21 ? 'beer' : 'juice';
console.log(firstName + " drinks " + drink + ".");

// Switch statement
var job = "instructor";

switch (job) {
    case "teacher" :
    case "instructor" :
        console.log(firstName + " teaches kids how to code.");
        break;

    case "driver" :
        console.log(firstName + " drives Uber in Lisbon.");
        break;

    case "designer" :
        console.log(firstName + " designs websites.");
        break;

    default :
        console.log(firstName + " does something else.");
}
*/




/************************************************
Video 17 - Truthy and Falsy values
************************************************/
/*

// Falsey values considered false - undefined, null, 0, '', NaN
// Truthy values: all values that are not falsey
var height;

height = 23;

if (height || height === 0) {
    console.log("variable has been defined.");
} else {
    console.log("variable has not been defined.");
}

// Equality operators
if (height == '23') {
    console.log("The == operator does type converstion");
}

*/


/************************************************
Video 18 & 20 - Coding challenge
************************************************/
/*

var johnsTeamAvg, mikesTeamAvg;

johnsTeamAvg = (89 + 120 + 103) / 3
mikesTeamAvg = (116 + 94 + 123) / 3


if (johnsTeamAvg > mikesTeamAvg) {
    console.log ("John's Team wins with an avereage of " + johnsTeamAvg + ".  Which is "
                 + (johnsTeamAvg - mikesTeamAvg) + " higher then Mike's team average of "
                 + mikesTeamAvg);
} else if (johnsTeamAvg < mikesTeamAvg) {
    console.log ("Mikes's Team wins with an avereage of " + mikesTeamAvg + ".  Which is "
                 + (mikesTeamAvg - johnsTeamAvg) + " higher then Johns's team average of "
                 + johnsTeamAvg);
} else {
    console.log ("Both teams have the same average of: " + johnsTeamAvg);
}

*/

/************************************************
Video 20 - Functions
************************************************/

/*
// function <function name> ({arguments}) {}
function calculateAge (birthYear) {
    return 2020 - birthYear;
}

console.log("The age of Kevin is " + calculateAge(1970));


function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement <= 0) {
        console.log(firstName + " has been retired for "
                   + (retirement * -1) + " years.")
    } else {
        console.log(firstName + " will retire in " + retirement
                    + " years.");
    }
}

yearsUntilRetirement(1970, "Kevin");
yearsUntilRetirement(1948, "Bob");
*/


/************************************************
Video 21 - Functions Expressions
************************************************/

// function declarations
/*function whatDoYouDo(job, firstName) {
    // ...
}*/

/*
// functions expression
var whatDoYouDo = function(job, firstName) {
    switch (job) {
        case 'teacher':
            return (firstName + " teaches kids how to code.");

        case 'driver':
            return (firstName + " drives a cab in Lisbon.");

        case 'designer':
            return (firstName + " designs beautiful websites.");

        default:
            return (firstName + " does something else.");
    }
}

console.log(whatDoYouDo("teacher", "John") );
console.log(whatDoYouDo("designer", "Kevin") );
console.log(whatDoYouDo("police", "Sean") );

// Expression returns a results
// statements do not return an immediate result.
// Functions expressions return a result but
// function declarations do not return an immediate result.
*/


/************************************************
Video 22 - Arrays
************************************************/

/*
// Initialize new arrays
var names = ["Kevin", "John", "Mike", "Jane", "Mark"];
var years = new Array(1970, 1990, 1969, 1980, 1986);

console.log(names[0] + " was born in " + years[0]);
console.log (names + " has a length of " + names.length);

// Mutated array data
names[1] = "Ben";
names[5] = "Mary";
names[names.length] = 'Beth';
console.log (names);

// Different data types
var john = ['John', 'Smith', 1990, 'teacher', false];

// Array methods
john.push("blue");    // Add an element to the end of the array
console.log(john);

john.unshift("Mr.");
console.log(john);

// Remove array elements
john.pop();
console.log(john);

john.shift();
console.log(john);

// Find elements
console.log(john.indexOf(1990));    // if in array then return the posision of array and -1 if not found.

var isDesigner = john.indexOf("designer") === -1
    ? "John is not a designer" : "John is a designer"
console.log(isDesigner);
*/


/************************************************
Video 23 & 24 - Coding challenge
************************************************/

/*
function tipCalculator (billAmount) {

    console.log(billAmount);

    switch (true) {     // need a true here and not billAmount;
        case (billAmount < 50):
            return (0.2 * billAmount);

        case (billAmount > 200):
            return (0.1 * billAmount);

        default:
            return 0.15 * billAmount;
    }
}

tipArray = [];
totalArray = [];

tipArray.push(tipCalculator(124));
totalArray.push(tipArray[0] + 124);
tipArray.push(tipCalculator(48));
totalArray.push(tipArray[1] + 48);
tipArray.push(tipCalculator(268));
totalArray.push(tipArray[2] + 268);

console.log(tipArray);
console.log(totalArray);
*/


/************************************************
Video 25 - Objects and Properties
************************************************/

/*
// Objects in JS we use key/value pairs
var john = {
    firstName: "John",  // firstName is the property of the John object
    lastName: "Smith",
    birthYear: 1990,
    family: ["Jane", "Mark", "Bob", "Emily"],
    job: "teacher",
    isMarried: false
};

console.log(john);
console.log(john.firstName);
console.log(john["lastName"]);

var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john.isMarried = true;
console.log(john);

var jane = new Object();
jane.firstName = "Jane";
jane.birthYear = 1969;
jane["lastName"] = "Smith";
console.log(jane);
*/


/************************************************
Video 26 - Objects and Methods
************************************************/

/*
var john = {
    firstName: "John",  // firstName is the property of the John object
    lastName: "Smith",
    birthYear: 1990,
    family: ["Jane", "Mark", "Bob", "Emily"],
    job: "teacher",
    isMarried: false,

    calcAge: function(birthYear) {      // Function expression assigned to calcAge
        return 2020 - birthYear;
    },

    calcAge2: function() {      // Using this instead of passing argument
        return 2020 - this.birthYear;
    },

    calcAge3: function() {      // Sets a new property into the object
        var d = new Date();
        this.age2 = d.getFullYear() - this.birthYear;
    }
};

console.log(john.calcAge(1990));
console.log(john.calcAge(john.birthYear));
console.log(john.calcAge2());

john.age = john.calcAge2();
console.log(john);

john.calcAge3();
console.log(john);
*/



/************************************************
Video 27 & 28 - Code challenge
************************************************/

/*var john = {
    fullName: "John Smith",
    mass: 0,
    height: 0.1,

    calcBmi: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi
    },

    isBmiLarger: function (inputBMI) {
        return (this.bmi > inputBMI);
    }
}

john.mass = 100;
john.height = 2;
console.log(john.calcBmi());


var mike = {
    fullName: "Mike Smith",
    mass: 0,
    height: 0.1,

    calcBmi: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi
    },

    isBmiLarger: function (inputBMI) {
        return (this.bmi > inputBMI);
    }
}

mike.mass = 100;
mike.height = 2.0;
console.log(mike.calcBmi());


if (john.isBmiLarger(mike.calcBmi())) {
    console.log("John's BMI is higher at: " + john.calcBmi());
} else if (mike.isBmiLarger(john.calcBmi())) {
    console.log("Mike's BMI is higher at: " + mike.calcBmi());
} else {
    console.log ("BMI's are the same");
}*/


/************************************************
Video 29 - Loops and iterations
************************************************/

/*
for (var i = 0; i < 10; i++) {
    console.log(i);
}

for (var i = 1; i < 20; i += 2) {
    console.log(i);
}
*/

var john = ['John', 'Smith', 1990, 'teacher', false, "blue"];
/*
for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}
*/

/*
var i = 0;
while (i < john.length) {
    console.log(john[i]);
    i++;
}
*/

// continue and break statements
/*
for (var i = 0; i < john.length; i++ ) {
    if (typeof john[i] != "string" ) {
        continue;   //  skip this iteration and go to next value in loop.
    }
    console.log(john[i]);   // write out only if it is a string.
}

for (var i = 0; i < john.length; i++ ) {
    if (typeof john[i] != "string" ) {
        break;   // break out the loop once a non-string is found.
    }
    console.log(john[i]);   // write out only if it is a string.
}

for (var i = 0; i < john.length; i++ ) {
    if (typeof john[i] === "string" ) {
        continue;   //  skip this iteration and go to next value in loop.
    }
    console.log(john[i]);   // write out only if it is a string.
}

for (var i = (john.length - 1); i >= 0; i-- ) {
    console.log(john[i]);
}
*/



/************************************************
Video 31 - 33 - Code challenge tip calculator
************************************************/

var billValueJohn = {
    fullName: "John Smith",
    values: [124, 48, 268, 180, 42],
    tips: [],
    totals: [],

    calcTip: function(value) {
        switch (true) {
        case (value < 50):
            return (0.2 * value);

        case (value > 200):
            return (0.1 * value);

        default:
            return 0.15 * value;
        }
    },

    calcTips: function () {

        for (i = 0; i < this.values.length; i++) {

            var currentValue = this.values[i];
            var currentTip = this.calcTip(currentValue);

            this.tips.push(currentTip);
            this.totals.push(currentTip + currentValue);
            //console.log(this.totals);

        }

        console.log("John's bills: " + this.values);
        console.log("John's tips: " + this.tips);
        console.log("John's tips plus bills: " + this.totals);
    }

}


billValueJohn.calcTips();



var billValueMark = {
    fullName: "Mark Smith",
    values: [77, 375, 110, 45],
    tips: [],
    totals: [],

    calcTip: function(value) {
        switch (true) {
        case (value < 100):
            return (0.2 * value);

        case (value > 300):
            return (0.25 * value);

        default:
            return 0.10 * value;
        }
    },

    calcTips: function () {

        for (i = 0; i < this.values.length; i++) {

            var currentValue = this.values[i];
            var currentTip = this.calcTip(currentValue);

            this.tips.push(currentTip);
            this.totals.push(currentTip + currentValue);
            //console.log(this.totals);

        }

        console.log("Bill's bills: " + this.values);
        console.log("Bill's tips: " + this.tips);
        console.log("Bill's tips plus bills: " + this.totals);

    }

}

billValueMark.calcTips();


calcAverageFromArray = function (arrayInput) {

    averageAmount = 0;

    for (i=0; i < arrayInput.length; i++) {
        averageAmount = averageAmount + arrayInput[i];
    }

    return averageAmount / arrayInput.length;
}

console.log("The average tip amount from John's family is: " + calcAverageFromArray(billValueJohn.tips));
console.log("The average tip amount from Marks's family is: " + calcAverageFromArray(billValueMark.tips));

