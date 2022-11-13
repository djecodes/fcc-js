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
const myArray = [
    ["string1", 1],
    ["string2", 2]
];

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
    [
        [10, 11, 12], 13, 14
    ],
];

const myData = myArray[2][1];

// An easy way to append data to the end of an array is the push() function
// Push ["dog", 3] onto the end of the myArray variable
const myArray = [
    ["John", 23],
    ["cat", 2]
];
myArray.push(["dog", 3]);

// .pop() is used to pop a value off of the end of an array
// Pop the last item from myArray and assign the popped off value to a new variable, removedFromMyArray
const myArray = [
    ["John", 23],
    ["cat", 2]
];
const removedFromMyArray = myArray.pop();

// .pop() always removes the last element of an array, .shift() removes the first element instead
// Remove the first item from myArray and assign the value to a new variable, removedFromMyArray
const myArray = [
    ["John", 23],
    ["dog", 3]
];
const removedFromMyArray = myArray.shift();

// .unshift() adds an element at the beginning of an array
// Add ["Paul", 35] to myArray
const myArray = [
    ["John", 23],
    ["dog", 3]
];
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

/* Variables which are declared within a function, as well as
 ** the function parameters, have local scope. That means they
 ** are only visible within that function.
 */
// Declare a local variable myVar inside myLocalScope
function myLocalScope() {
    const myVar = "bar";
    console.log('inside myLocalScope', myVar);
}
myLocalScope();

console.log('outside myLocalScope', myVar);

/* It is possible to have both local and global variables with
 ** the same name. When you do this, the local variable takes
 ** precedence over the global variable.
 */
/* Add a local variable to myOutfit function to override the 
 ** value of outerWear with the string, "sweater".
 */
const outerWear = "T-Shirt";

function myOutfit() {
    const outerWear = "sweater";
    return outerWear;
}

myOutfit();

/* A function can include the return statement but it does not
 ** have to. In the case that the function doesn't have a return
 ** statement, when you call it, the function processes the inner
 ** code but the returned vallue is undefined.
 */
/* Create a function addFive without any arguments. This function
 ** adds 5 to the sum variable, but its returned value is undefined
 */
let sum = 0;

function addThree() {
    sum = sum + 3;
}

function addFive() {
    sum = sum + 5;
}

addThree();
addFive();

/* We can take the return value of a function and assign it to a
 ** variable.
 */
/* Call the processArg function with an argument of 7
 ** and assign its return value to the variable processed
 */
let processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

processed = processArg(7);

/* In Computer Science, a queue is an abstract Data Structure
 ** where items are kept in order. New items can be added at the
 ** back of the queue and old items are taken off from the front
 ** of the queue.
 */
/* 1.) Write a function nextInLine which takes an array (arr)
 ** and a number (item) as arguments
 ** 2.) Add the number to the end of the array, then remove 
 ** the first element of the array.
 ** 3.) The nextInLine function should then return the element
 ** that was removed.
 */
function nextInLine(arr, item) {
    arr.push(item);
    item = arr.shift();
    return item;
}

let testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

/* Boolean may only be one of two values: true or false. They are basically an on-off switch
 ** where true is on and false is off
 */
// Modify welcomeToBooleans function so that it returns true instead of false
function welcomeToBooleans() {
    return true;
}

/* if statements are used to make decisions in code. The keyword 'if' tells JS to execute
 ** the code in the curly braces under certain conditions, defined in the parentheses. These
 ** conditions are known as Boolean conditions and they may only be true or false.
 **
 ** When the condition evaluates to true, the program executes the statement inside the curly
 ** braces.
 ** When the condition evaluates to false, the statement inside the curly braces will not
 ** execute.
 */
/* Create an if statement inside the function to return "Yes, that was true" if the parameter
 ** wasThatTrue is true and return "No, that was false" otherwise.
 */
function trueOrFalse(wasThatTrue) {
    if (wasThatTrue == true) {
        return "Yes, that was true";
    }
    return "No, that was false";
}

/* The equality operator compares two values and returns true if they're equivalent or false
 ** if they're not. Note that equality is different from assignment (=), which assigns the
 ** value on the right of the operator to a variable on the left.
 */
/* Add the equality operator to the indicated line so that the function will return
 ** the string Equal when val is equivalent to 12.
 */
function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}

testEqual(10);

/* Strict equality (===) is the counterpart to the equality operator. Unlike the equality operator,
 ** which attempts to convert both values being compared to a common type, the strict equality
 ** operator does not perform a type conversion.
 ** If the values being compared have different types, they are considered unequal and the strict
 ** operator will return false.
 */
/* Use the strict equality operator in the if statement so the function will return the string
 ** Equal when val is strictly equal to 7.
 */
function testStrict(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not Equal";
}

testStrict(10);

/* If the values being compared are not of the same type, the equality operator will perform a
 ** type conversion, and then evaluate the values. However, the strict equality operator will
 ** compare both the data type and value as-is, without converting one type to the other.
 */
/* The compareEquality function in the editor compares two values using the equality operator.
 ** Modify the function so that it returns the string Equal only when the values are strictly
 ** equal.
 */
function compareEquality(a, b) {
    if (a === b) {
        return "Equal";
    }
    return "Not Equal"
}

compareEquality(10, "10");

/* The inequality operator (!=) is the opposite of the equality operator. It means not equal
 ** and returns false where equality would return true and vice versa. 
 ** Like the equality operator, the inequality operator will convert data types of values
 ** while comparing.
 */
/* Add the inequality operator != in the if statement so that the function will return
 ** Not Equal when val is not equivalent to 99
 */
function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal";
    }
    return "Equal";
}

testNotEqual(10);

/* The strict inequality (!==) is the logical opposite of the strict
 * equality operator. It means "Strictly Not Equal" and returns false
 * where strict equality would return true and vice versa.
 * 
 * !== will not convert data types.
 */

/* Add !== to the if statement so the function will return the string
 * Not Equal when val is not strictly equal to 17
 */
function testStrictNotEqual(val) {
    if (val !== 17) {
        return "Not Equal";
    }
    return "Equal";
}

testStrictNotEqual(10);

/* The greater operator (>) compares the value of two numbers.
 * If the number to the left is greater than the number to the right,
 * it returns true. Otherwise, it returns false.
 * 
 * Like the equality operator, the greater than operator will convert
 * data types of values while comparing.
 */
/* Add the greater than operator to the indicated lines so that the return
 * statements make sense.
 */
function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100";
    }

    if (val > 10) {
        return "Over 10";
    }

    return "10 or Under";
}

testGreaterThan(10);

/* The greater than or equal to operator (>=) compares the value of two
 * numbers. If the number to the left is greater than or equal to the number
 * to the right, it returns true. Otherwise, it returns false.
 * 
 * Like the equality operator, the greater than or equal to operator will convert
 * data types while comparing.
 */
/* Add the greater than or equal to operator to the indicted lines so that the return
 * statements make sense.
 */
function testGreaterOrEqual(val) {
    if (val >= 20) {
        return "20 or Over";
    }

    if (val >= 10) {
        return "10 or Over";
    }

    return "Less than 10";
}

testGreaterOrEqual(10);

/* The less than operator (<) compares the value of two numbers.
 * If the number to the left is less than the number to the right
 * it returns true. Otherwise, it returns false.
 * Like the equality operator, the > operator converts data types while comparing.
 */
// Add the > operator to the indicated lines so that the return statement makes sense
function testLessThan(val) {
    if (val < 25) {
        return "Under 25";
    }

    if (val < 55) {
        return "Under 55";
    }

    return "55 or Over";
}

testLessThan(10);

/* The less than or equal operator (<=) compares the value of two numbers.
 * If the number to the left is less than or equal to the number to the right
 * it returns true. If the number on the left is greater than the number to the right
 * it returns false. The <= operator converts data types.
 */
// Add the <= operator to the indicated lines so that the return statement makes sense
function testLessOrEqual(val) {
    if (val <= 12) {
        return "Smaller Than or Equal to 12";
    }

    if (val <= 24) {
        return "Smaller Than or Equal to 24";
    }

    return "More Than 24";
}

testLessOrEqual(10);

/* The logical and operator (&&) returns true if and only if the operands to the left
 * and right of it are true.
 */
/* Replace the two if statements with one statement, using the && operator
 * which will return the string Yes if val is <= 50 and >= 25, otherwise return the string No.
 */
function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
    }

    return "No"
}

testLogicalAnd(10);

// The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false
// return the string Outside if val is not between 10 and 20, inclusive. Otherwise return the string Inside.
function testLogicalOr(val) {
    if (val < 10 || val > 20) {
        return "Outside";
    }

    return "Inside";
}

testLogicalOr(15);

// An else statement is an alternate block of code which can be executed if the prior if statement is false
// Combine the if statements into a single if/else statement

function testElse(val) {
    let result = "";

    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or Smaller";
    }

    return result;
}

testElse(4);

// You can chain if statements together with else if.
// Convert the logic to use else if statements
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}

testElseIf(7);

/* Golf Code Challenge:
 * In the game of Golf, each hole has a par, meaning, the average number of strokes a golfer is expected
 * to make in order to sink the ball in the hole to complete the play. Depending on how far above or below
 * par your strokes are, there is a different nickname.
 * 
 * Your function will be passed "par" and "strokes" arguments. Return the correct string according to this
 * table which lists the strokes in order of priority; top(highest) to bottom(lowest):
 * 1 returns "Hole-in-one!"
 * <= par - 2 returns "Eagle"
 * par - 1 returns "Birdie"
 * par + 1 returns "Bogey"
 * par + 2 returns "Double Bogey"
 * >= par + 3 returns "Go Home!"
 * 
 * par and strokes will always be numeric and positive.
 */
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes == par - 1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    } else if (strokes == par + 1) {
        return names[4];
    } else if (strokes == par + 2) {
        return names[5];
    } else {
        return names[6];
    }

}

golfScore(5, 4);

/* A switch statement tests a value and can have many case statements which define various possible values
 * Statements are executed from the first matched case value until a break is encountered.
 */
/* Write a switch statement which test val and sets answer for the following conditions:
 * 1 - alpha
 * 2 - beta
 * 3 - gamma
 * 4 - delta
 */
function caseInSwitch(val) {
    let answer = "";

    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }

    return answer;
}

caseInSwitch(1);

/* In a switch statement you may not be able to specify all possible values as case statements.
 * Instead, you can add the default statement which will executed if no matching case are found.
 */
/* Write a switch statement to set answer for the following conditions:
 * a - apple
 * b - bird
 * c - cat
 * default - stuff
 */
function switchOfStuff(val) {
    let answer = "";

    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
    }

    return answer;
}

switchOfStuff(1);

/* If the break statement is omitted from a switch statement's case, the following case statement(s)
 * are executed until a break is encountered.
 */
/* Write a switch statement to set answer for the following ranges:
 * 1-3 => low
 * 4-6 => Mid
 * 7-9 => High
 */
function sequentialSizes(val) {
    let answer = "";

    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
    }

    return answer;
}

sequentialSizes(1);

// If you have many options to choose from, a switch statement can be easier than many chained if/else statements
// Change the chained if/else if statements into a switch statement
function chainToSwitch(val) {
    let answer = "";

    switch (val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
    }

    return answer;
}

chainToSwitch(7);

// We can return the result of a comparison without an if/else because === returns true or false.
// Fix the function isLess to remove the if/else statements

/* Previous code: 
 * function isLess(a, b) {
 *    if (a < b) {
 *      return true;
 * } else {
 *      return false;
 * }
 */
function isLess(a, b) {
    return a < b;
}

isLess(10, 15);

/* When a return statement is reached, the execution of the current function stops and control returns
 * to the calling location.
 */
/* Modify the function abTest so that if a or b are less than 0 the function will immediately exit with
 * a value of undefined
 */
function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined;
    }

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2, 2);

/* Counting Cards Challenge:
 * 
 * In the casino game Blackjack, a player can determine whether they have an advantage on the next hand
 * over the house by keeping track of the relative number of high and low cards remaining in the deck.
 * This is called Card Counting.
 * 
 * Having more high cards remaining in the deck favors the player. Each card is assigned a value according
 * to the table below. When the count is positive, the player should bet high. When the count is zero or
 * negative, the player should bet low.
 * 
 * Count Change - Cards
 * + 1 - 2, 3, 4, 5, 6
 * 0 - 7, 8, 9
 * -1 - 10, 'J', 'Q', 'K', 'A'
 * 
 * Instructions
 * 
 * You will write a card counting function. It will receive a 'card' parameter, which can be a number or
 * a string, and increment or decrement the global 'count' variable according to the card's value.
 * The function will then return a string with the current count and the string 'Bet' if the count is 
 * positive, or 'Hold' if the count is zero or negative. The current count and the player's decision
 * (Bet or Hold) should be separated by a single space.
 * 
 * Example Outputs: "-3 Hold" or "5 Bet"
 */
let count = 0;

function cc(card) {

    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count += 1;
            break;
        case 7:
        case 8:
        case 9:
            count += 0;
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count -= 1;
            break;
    }

    if (count > 0) {
        return count + " " + "Bet";
    } else {
        return count + " " + "Hold";
    }
}

cc(2);
cc(3);
cc(7);
cc('K');
cc('A');

// Objects are useful for storing data, through properties, and can represent real world objects, like a cat
// Make an object that represents a dog called myDog
const myDog = {
    "name": "Princess",
    "legs": 4,
    "tails": 1,
    "friends": ["Lucy", "Oats"]
};

// Dot notation is what you use when you know the name of the property you're trying to access ahead of time
/* Read in the property values of testObj using dot notation.
 * Set the variable hatValue equal to the object's property hat.
 * Set the variable shirtValue equal to the object's property shirt.
 */
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

const hatValue = testObj.hat;
const shirtValue = testObj.shirt;

/* Bracket notation is another way to access the properties of an object.
 * If the property of the object you were trying to access has a space in its name
 * you will still need to use bracket notation.
 */
const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

const entreeValue = testObj["an entree"];
const drinkValue = testObj["the drink"];

/* Another use of bracket notation on objects is to access a property which is stored as the value of a
 * variable. This can be very useful for iterating through an object's properties or when accessing a
 * lookup table.
 */
const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

const playerNumber = 16;
const player = testObj[playerNumber];

/* After you've created a JavaScript object, you can update its properties at any time just like you would
 * any other variable. You can use either dot or bracket notation to update.
 */
// Update the myDog object's name property.

const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
}

myDog["name"] = "Happy Coder";

// You can add new properties to existing JS objects the same way you would modifying them
// Add a bark property to myDog
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

myDog.bark = "woof";

// We can also delete properties from objects
// Delete the tails property from myDog
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};

delete myDog.tails;

/* Objects can be thought of as  a key/value storage, like a dictionary.
 * If you have tabular data, you can use an object to lookup values rather than a switch statement
 * or an if/else chain. This is most useful when you know that your input data is limited to a certain
 * range.
 */
/* Convert the switch statement into an object called 'lookup'. Use it to look up val and assign the
 * associated string to the result variable.
 */
function phoneticLookup(val) {

    const lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };

    let result = lookup[val];

    return result;
}

phoneticLookup("charlie");

/* Sometimes it is useful to check if the property of a given object exists or not.
 * We can use the .hasOwnProperty(propname) method of objects to determine if that object has given
 * property name.
 * .hasOwnProperty() returns true or false if the property is found or not.
 */
/* Modify the function checkObj to test if an object passed to the function (obj) contains a specific
 * property (checkProp). If the property is found, return that property's value 
 */
function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
    } else {
        return "Not Found";
    }
}

/* Sometimes you want to store data in a flexible Data Structure. 
 * A JavaScript object is one way to handle flexible data.
 * They allow for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects
 */
/* Add a new album to the myMusic array. Add artist and title strings, release_year number, and a formats
 * array of strings
 */
const myMusic = [{
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
        "CD",
        "8T",
        "LP"
    ],
    "gold": true
}, {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [
        "CD",
        "Cassette",
        "LP"
    ],
    "gold": true
}];

// The sub-properties of objects can be accessed by chaining together the dot or bracket notation.
/* Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents
 * variable. Use dot notation for all properties where possible, otherwise use bracket notation.
 */
const myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

const gloveBoxContents = myStorage.car.inside["glove box"];

// Similar to accessing nested objects, array bracket notation can be chained to access nested arrays
/* Using dot and bracket notation, 
 * set the variable secondTree to the second item in the trees list from the myPlants object.
 */
const myPlants = [{
    type: "flowers",
    list: [
        "rose",
        "tulip",
        "dandelion"
    ]
}, {
    type: "trees",
    list: [
        "fir",
        "pine",
        "birch"
    ]
}];

const secondTree = myPlants[1].list[1];

/* Record Collection Challenge:
 * You are given an object literal representing a part of your musical collection.
 * Each album has a unique id number as its key and several other properties.
 * Not all albums have complete information.
 * 
 * You start with an updateRecords function that takes an object literal, records,
 * containing the musical album collection, an id, a prop (like artist or tracks), and a value.
 * 
 * Complete the function using the rules below to modify the object passed to the function.
 * 
 * - Your function must always return the entire record collection object
 * - If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
 * - If prop is tracks but the album doesn't have a tracks property, create an empty array and add value
 * to it.
 * - If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks
 * array.
 * - If value is an empty string, delete the given prop property from the album.
 */
const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        albumTitle: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

function updateRecords(records, id, prop, value) {
    if (prop !== 'tracks' && value !== '') {
        records[id][prop] = value;
    } else if (prop === 'tracks' && records[id].hasOwnProperty('tracks') === false) {
        records[id][prop] = [value];
    } else if (prop === 'tracks' && value !== '') {
        records[id][prop].push(value);
    } else if (value === '') {
        delete records[id][prop];
    }

    return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');

// While loops runs while a specified condition is true and stops once that condition isn't true
// Add the numbers 5 through 0 in descending order to myArray using a while loop.
const myArray = [];
let i = 5;

while (i >= 0) {
    myArray.push(i);
    i--;
}

// For loops run for a specific number of times.
// Add the numbers 1 through 5 to myArray using a for loop
const myArray = [];

for (let i = 1; i < 6; i++){
    myArray.push(i);
}

// For loops don't have to iterate one at a time.
// Push the odd numbers from 1 through 9 to myArray using a for loop
const myArray = [];

for (let i = 1; i < 10; i += 2){
    myArray.push(i);
}

// A for loop can also count backwards, so long as we can define the right condition
// Push the odd numbers from 9 through 1 to myArray using a for loop.
const myArray = [];

for (let i = 9; i > 0; i -= 2) {
    myArray.push(i);
}

// A common task in JS is to iterate through the contents of an array. One way is to use a for loop.
// Use a for loop to add the value of each element of the myArr array to total
const myArr = [2, 3, 4, 5, 6];

let total = 0;
for (let i = 0; i < myArr.length; i++) {
    total += myArr[i];
}

/* If you have a multi-dimensional array, you can use the same logic as the prior waypoint to loop
 * through both the array and any sub-arrays.
 */
function multiplyAll(arr){
    let product = 1;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }

    return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

/* A do...while loop will first do one pass of the code inside the loop no matter what, then continue
 * to run the loop while the specified condition evaluates to true.
 * What makes do...while loops different is how it behaves when the condition fails on the first check.
 */
/* Change the while loop in the code to a do...while loop so the loop will push only the number 10 to
 * myArray and 'i' will be equal to 11 when your code has finished running.
 */
const myArray = [];
let i = 10;

do {
    myArray.push(i);
    i++;
} while (i < 11);