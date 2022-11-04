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
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";

// In JS, when the + operator is used with a string value, it is called the concatenation operator.
// Build myStr from the strings "This is the start." and "This is the end." using the + operator
const myStr = "This is the start. " + "This is the end.";

// We can also use the += operator to concatenate a string onto the end of an existing string variable
/* Build myStr over several lines by concatenating these two strings: 
** "This is the first sentence." and "This is the second sentence."
*/
let myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

// By using the + operator, you can insert one or more variables into a string
// Set myName to a string equal to your name and build myStr with myName
const myName = "Danny";
const myStr = "My name is " + myName + " and I am well!";

// We can also append variables to a string using the += operator
// Set someAdjective to a string of at least 3 characters and append it to myStr
const someAdjective = "majestic";
let myStr = "Learning to code is "
myStr += someAdjective;

// You can find the length of a string value by writing .length
// Use .length to set lastNameLength to the number of characters in lastName
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;

// Bracket notation is a way to get a character at a specific index within a string
// Use bracket notation to find the first character in the lastName variable and assign it to firstLetterOfLastName
let firstLetterOfLastName = "";
const lastName = "Lovelace";
firstLetterOfLastName = lastName[0];

// In JS, string values are immutable, meaning they cannot be altered once created
// Correct the assignment to myStr so it contains the string value "Hello World"
let myStr = "Jello World";
myStr = "Hello World" //Original code: myStr[0] = "H"

// You can use bracket notation to get the character at other positions within a string
// Set thirdLetterOfLastName to equal the third letter of the lastName variable
const lastName = "Lovelace";
const thirdLetterOfLastName = lastName[2];

// In order to get the last letter of a string, you can subtract one from the string's length
// Find the last character in the lastName variable
const lastName = "Lovelace";
const lastLetterOfLastName = lastName[lastName.length - 1];

// The same principle goes for retrieving the Nth-to-last character
// Find the second-to-last character in the lastName string
const lastName = "Lovelace";
const secondToLastLetterOfLastName = lastName[lastName.length - 2];

/* Word Blanks Challenge:
** In this challenge, we provide you with a noun, a verb, an adjective
** and an adverb. You need to form a complete sentence using words of your choice,
** along with the words we provide.
*/
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks = "The " + myAdjective + " " + myNoun + " saw a fox and then " + myVerb + " " + myAdverb;

// With JS array variables, we can store several pieces of data in one place
// Modify the new array myArray so that it contains both a string and a number (in that order)
const myArray = ["string", 3];

// You can also nest arrays within other arrays, this is called a multi-dimensional array
// Create a nested array called myArray
const myArray = [["string1", 1], ["string2", 2]];

// We can access the data inside arrays using indexes
// Create a variable called myData and set it equal to the first value of myArray
const myArray = [50, 60, 70];
const myData = myArray[0];

/* Unlike strings, the entries of arrays are mutable and can be changed freely,
** even if the array was declared with const
*/
// Modify the data stored at index 0 of myArray to a value of 45
const myArray = [18, 64, 99];
myArray[0] = 45;

// One way to think of a multi-dimensional array, is as an array of arrays.
// Using bracket notation select an element from myArray such that myData is equal to 8
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];

// An easy way to append data to the end of an array is the push() function
// Push ["dog", 3] onto the end of the myArray variable
const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);

// .pop() is used to pop a value off of the end of an array
// Pop the last item from myArray and assign the popped off value to a new variable, removedFromMyArray
const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop();

// .pop() always removes the last element of an array, .shift() removes the first element instead
// Remove the first item from myArray and assign the value to a new variable, removedFromMyArray
const myArray = [["John", 23], ["dog", 3]];
const removedFromMyArray = myArray.shift();

// .unshift() adds an element at the beginning of an array
// Add ["Paul", 35] to myArray
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);

/* Shopping List Challenge:
** 1.) Create a shopping list in the variable myList. The list should be a multi-dimensional
** array containing several sub-arrays.
** 2.) The first element in each sub-array should contain a string with the name of the item.
** The second element should be a number representing the quantity like ["Apple", 15]
** 3.) There should be at least 5 sub-arrays in the list.
*/
const myList = [
    ["Banana", 3],
    ["Mayonnaise", 1],
    ["Jello", 6],
    ["Milk", 2],
    ["Eggs", 12],
];

// In JS, we can divide our code into reusable parts called functions
/* Create a function called reusableFunction which prints the string "Hi World", 
** and called the function
*/
function reusableFunction() {
    console.log("Hi World");
}
reusableFunction();

/* Parameters are variables that act as placeholders for the values that are to be input
** to a function when it is called. The actual values that are passed into a function
** when it's called are known as arguments.
*/
/* 1.) Create a function called functionWithArgs that accepts two arguments and outputs their
** sum to the dev console.
** 2.) Call the function with two numbers as arguments.
*/
function functionWithArgs(a, b) {
    console.log(a + b);
}
functionWithArgs(2, 3);

// You can use a return statement to send a value back out of a function
// Create a function timesFive that accepts one argument, multiplies it by 5, and returns the value
function timesFive(a) {
    return a * 5;
}
timesFive(5);

/* In JS, scope refers to the visibility of variables. Variables which are defined outside
** of a function block have Global scope. This means, they can be seen everywhere in your code.
** Variables declared without the let or const keywords are automatically created 
** in the global scope.
*/
/* 1.) Declare a global variable named myGlobal outside of any function. 
** 2.) Initialize it with a value of 10
** 3.) Inside function fun1, assign 5 to oopsGlobal without using the var, let, const keywords
*/
const myGlobal = 10;
function fun1() {
    oopsGlobal = 5;
}
function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}