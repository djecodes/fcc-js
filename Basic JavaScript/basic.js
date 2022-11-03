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

// JS use the * symbol for multiplication
// Change the code so that product will equal 80
const product = 8 * 10;

// JS uses the / symbol for division
// Change the code so that the quotient is equal to 2
const quotient = 66 / 33;

// In JS, you can increment a variable with the ++ operator
// Change the code to use ++ on myVar
let myVar = 87;
myVar++;

// In JS, you can decrement a variable with the -- operator
// Change the code to use -- on myVar
let myVar = 11;
myVar--;

// Decimal numbers are sometimes referred to as floating point numbers or floats
// Create a variable myDecimal and give it a value with a fractional part (e.g. 5.7)
const myDecimal = 6.5;

// In JS, you can also perform calculations with decimal numbers
// Change the code so that product will equal 5.0
const product = 5.0 * 1.0;

// Now let's divide one decimal by another
const quotient = 4.4 / 2.0;

// The remainder operator % gives the remainder of the division of two numbers
// Set remainder equal to the remainder of 11 divided by 3
const remainder = 11 % 3;

/* In programming, it is common to use assignments to modify the contents of a variable.
** There are operators which do both mathematical operation and assignment in one step.
** One such operator is +=
*/
// Convert the assignments for a, b, and c to use the += operator
let a = 3;
let b = 17;
let c = 12;

a += 12;
b += 9;
c += 7;

// Like the += operator, -= subtracts a number from a variable
// Convert the assignments for a, b, and c to use the -= operator
let a = 11;
let b = 15;
let c = 3;

a -= 6;
b -= 15;
c -= 1;

// The *= operator multiplies a variable by a number
// Convert the assignments for a, b, and c to use the *= operator
let a = 5;
let b = 12;
let c = 4.6;

a *= 5;
b *= 3;
c *= 10;

// The /= operator divides a variable by another number
// Convert the assignments for a, b, and c to use the /= operator
let a = 48;
let b = 108;
let c = 33;

a /= 12;
b /= 4;
c /= 11;

/* In JS, you can escape a quote from considering it as an end of string quote by
** placing a backslash (\) in front of the quote
*/
// Use backslashes to assign a string to the myStr variable
const myStr = "I am a \"double quoted\" string inside \"double quotes\".";

/* String values in JS may be written with single or double quotes,
** as long as you start and end with the same type of quote.
*/
// Change the provided string to a string with single quotes at the beginning and end and no escape characters
// Original string: const myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

/* You can use an escape also to allow you to use characters you may not otherwise be able to type out
** such as a newline.
*/
// Assign the following three lines of text into the single variable myStr using escape sequences
