// Create two of each kind of comment

// This is an inline comment
/* This is a 
multiline comment */

// Variables allow computers to store and manipulate data in a dynamic fashion
// Use the var keyword to create a variable called myName 
var myName;

// You can store a variable with the assignment operator, =
// Assign the value 7 to a
var a;
a = 7;

/* After a value is assigned to a variable using the assignment operator
** you can assign the value of that variable to another variable.
*/
var a;
a = 7;
var b;
b = a;

/* It's common to initalize a variable to an initial value in the same line
** as it is declared.
*/
var a = 9;

/* A string literal, or string, is a series of zero or more character enclosed
** enclosed in single or double quotes
*/
var myFirstName = "Danny"
var myLastName = "E."

// When a variable is declared, they have an initial value of undefined
// Initialize the three variables a, b, and c so that they will not be undefined
var a = 5;
var b = 10;
var c = "I am a";

// Variables and function names are case sensitive. This means that capitalization matters.
// Write the variable names in camelCase
var studlyCapVar; //original: StUdLyCapVaR
var properCamelCase;
var titleCaseOver; //original: TitleCaseOver

// Biggest problem when declaring with var is it can easily overwrite variable declarations.
// Unlike var, when you use let, a variable with the same name can only be declared once.
// Update the code so it only uses the let keyword
let catName = "Oliver";
let catSound = "Meow!";

/* Constants are read-only, and they are a constant value which means that once a variable is 
** assigned with const, it cannot be reassigned.
*/
// Change the code so all variables declared using let or const properly
const FCC = "freeCodeCamp";
let fact = "is cool!";
fact = "is awesome!";
console.log(FCC, fact);

// Number is a data type in JS which represents numeric data
// JS uses the + symbol as an addition operator between two numbers
// Change the code so that sum will equal 20
const sum = 10 + 10;

// JS uses the - symbol for subtraction
// Change the code so that the difference is 12
const difference = 45 - 33;
