/* When you declare a variable with the let keyword inside a block, statement, or expression,
 * its scope is limited to that block, statement, or expression.
 *
 * Fix the code so that 'i' declared in the if statement is a separate variable than 'i' declared
 * in the first line of the function.
 */
function checkScope() {
    let i = 'function scope';
    if (true) {
        let i = 'block scope';
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope is: ', i);
    return i;
}

/* Some developers prefer to assign all their variables using const by default, unless they know
 * they will need to reassign the value. Only in that case, they use let.
 * 
 * However, it is important to understand that objects (including arrays and functions) assigned
 * to a variable using const are still mutable. Using the const declaration only prevents reassign-
 * ment of the variable identifier.
 * 
 * Change the array to [2, 5, 7] using various element assignments.
 */
const s = [5, 7, 2];
function editInPlace() {
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}
editInPlace();

/* const declaration alone doesn't really protect your data from mutation. To ensure your data doesn't
 * change, JS provides a function Object.freeze to prevent data mutation.
 * 
 * Any attempt at changing the object will be rejected, with an error thrown if the script is running
 * in strict mode.
 * 
 * In this challenge, you need to freeze the MATH_CONSTANTS object so that no one is able to alter the
 * value of PI, add, or delete properties.
 */
function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS);

    try {
        MATH_CONSTANTS.PI = 99;
    } catch(ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

/* ES6 allows us to write anonymous functions differently, this is called an arrow function
 *
 * Rewrite the function assigned to that variable magic which returns a new Date() to use arrow
 * function syntax.
 */
const magic = () => new Date();

/* Just like a regular function, you can pass arguments into an arrow function
 *
 * If an arrow function has a single parameter, the parentheses enclosing the parameter may be 
 * omitted.
 * 
 * It is possible to pass more than one argument into an arrow function.
 *
 * Rewrite the myConcat function which appends contents of arr2 to arr1 so that the function uses
 * arrow function syntax.
 */
const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

/* In order to help us create more flexible functions, ES6 introduces default parameters for functions
 *
 * Modify the function increment by adding default parameters so that it will add 1 to number if value
 * is not specified.
 */
const increment = (number, value = 1) => number + value;

/* In order to help us create more flexible functions, ES6 introduces the rest parameter for function
 * parameters.
 *
 * With the rest parameter, you can create functions that take a variable number of arguments. These
 * arguments are stored in an array that can be accessed later from inside the function.
 * 
 * Modify the function sum using the rest parameter.
 */
const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}

/* ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places
 * where multiple parameters or elements are expected.
 *
 * Copy all contents of arr1 into another array arr2 using the spread operator.
 */
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];

console.log(arr2);

/* Destructuring assignment is special syntax introduced in ES6, for neatly assigning values taken directly
 * from an object.
 *
 * Replace the two assignments with an equivalent destructing assignment.
 */
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

/* Old ES5 way:
 * const today = HIGH_TEMPERATURES.today;
 * const tomorrow = HIGH_TEMPERATURES.tomorrow;
 */
const {today, tomorrow} = HIGH_TEMPERATURES;

/* Destructuring allows you to assign a new variable name when extracting values. You can do this by
 * putting the new name after a colon when assigning the value.
 *
 * Replace the two assignements with an equivalent destructuring assignment.
 */
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;

/* You can use the same principles from the previous two lessons to destructure values from nested objects
 *
 * Replace the two assignments with an equivalent destructuring assignment.
 */
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};

/* Original assignments:
 * const lowToday = LOCAL_FORECAST.today.low;
 * const highToday = LOCAL_FORECAST.today.high;
 */
const { today: { low: lowToday, high: highToday }} = LOCAL_FORECAST;

/* ES6 makes destructuring arrays as easy as destructuring objects.
 *
 * One key difference between the spread operator and array destructuring is that the spread operator
 * unpacks all contents of an array into a comma-separated list. Consequently, you cannot pick or choose
 * which elements you want to assign to variables.
 * 
 * Use destructuring assignment to swap the values of a and b so that a receives the value stored in b,
 * and b receives the value stored in a.
 */
let a = 8, b = 6;
[a, b] = [b, a];

/* In some situations involving array destructuring, we might want to collect the rest of the elements
 * into a separate array.
 *
 * Use a destructuring assignment with the rest parameter to emulate the behavior of Array.prototype.slice
 */
function removeFirstTwo(list) {
    const [a, b, ...shorterList] = list; 
    return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);

/* In some cases, you can destructure the object in a function argument itself.
 * Consider the code below:
 * 
 * const profileUpdate = (profileData) => {
 *      const { name, age, nationality, location } = profileData;
 * }
 * 
 * This effectively destructures the object sent into the function, This can also be done in-place:
 * 
 * const profileUpdate = ({ name, age, nationality, location}) => {
 * 
 * }
 * 
 * When profileData is passed to the above function, the values are destructured from the function parameter
 * for use within the function.
 * 
 * Use destructuring assignment within the argument to the function half to send only max and min inside
 * the function.
 */
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

const half = ({ max, min }) => (max + min) / 2.0;

/* A new feature of ES6 is the template literal. Template literals allow you to create multi-line strings
 * and to use string interpolation features to create strings.
 *
 * Use template literal syntax with backticks to create an array of list element strings.
 */
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
    const failureItems = [];
    for (let i = 0; i < arr.length; i++) {
        failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    }

    return failureItems;
}

const failuresList = makeList(result.failure);

/* ES6 adds some nice support for easily defining object literals.
 * Consider the following code:
 * 
 * const getMousePosition = (x, y) => ({
 *      x: x,
 *      y: y
 * });
 * 
 * ES6 provides the syntactic sugar to eliminate the redundancy of having to write x: x. You can simply
 * write x once, and it will be converted to x: x under the hood. Here is the same function from above
 * rewritten to use this new syntax:
 * 
 * const getMousePosition = (x, y) => ({ x, y });
 * 
 * Use objects property shorthand with obejct literals to create and return an object with name, age, and
 * gender properties.
 */
const createPerson = (name, age, gender) => ({ name, age, gender });

/* With ES6, you can remove the function keyword and colon altogether when defining functions in objects
 *
 * Refactor the function setGear inside the object bicycle to use the shorthand syntax described above.
 */
const bicycle = {
    gear: 2,
    setGear(newGear) {
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log(bicycle.gear);

/* ES6 provides a new syntax to create objects, using the class keyword.
 * 
 * In ES6, a class declaration has a constructor method that is invoked with the new keyword.
 * 
 * If the constructor method is not explicitly defined, then it is implicity defined with no arguments.
 * 
 * It should be noted that the class keyword declares a new function, to which a constructor is added.
 * 
 * This constructor is invoked when new is called to create a new object.
 * 
 * Note: UpperCamelCase should be used by convention for ES6 class names.
 * 
 * The constructor method is a special method for creating and initializing an object created with a class.
 * 
 * Use the class keyword and write a constructor to create the Vegetable class.
 */
class Vegetable {
    constructor(name) {
        this.name = name;
    }
}

const carrot = new Vegetable('carrot');
console.log(carrot.name);

/* You can obtain values from an object and set the value of a property within an object.
 * These are called getters and setters. 
 *
 * Getter functions are to simply return (get) the value of an object's private variable to the user
 * without the user directly accessing the private variable.
 * 
 * Setter functions are meant to modify (set) the value of an object's private variable based on the
 * value passed into the setter function. This change could involve calculations, or even overwriting
 * the previous value completely.
 * 
 * Note: It is convention to precede the name of a private variable with an underscore. However, 
 * the practice itself does not make a variable private.
 * 
 * 1. Use the class keyword to create a Thermostat class. The constructor accepts a Fahrenheit temperature.
 * 2. In the class, create a getter to obtain the temperature in Celsius and a setter to set the temperature
 * in Celsius.
 * Note: When you implement this, you will track the temperature inside the class in one scale, either
 * Fahrenheit or Celsius.
 */
class Thermostat {
    constructor(fahrenheit) {
        this.fahrenheit = fahrenheit;
    }

    get temperature() {
        return (5 / 9) * (this.fahrenheit - 32);
    }

    set temperature(celsius) {
        this.fahrenheit = (celsius * 9.0) / 5 + 32;
    }
}

const thermos = new Thermostat(76); // Setting in Fahernheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; //26 in Celsius

/* In order to use functions in other files, you need to export it.
 * When you export a variable or function, you can import it in another file and use it without having to
 * rewrite the code.
 * You can export multiple things by repeating the first example for each thing you want to export, or by
 * placing them all in the export statement.
 * 
 * There are two string-related functions, Export them both using the method of your choice.
 */
const uppercaseString = (string) => {
    return string.toUpperCase();
}

const lowercaseString = (string) => {
    return string.toLowerCase();
}

export { uppercaseString, lowercaseString };

/* import allows you to choose which parts of a file or module to load.
 *
 * Add the appropriate import statement that will allow the current file to use the uppercaseString and
 * lowercaseString functions you exported in the previous lesson.
 */
import { uppercaseString, lowercaseString } from './string_functions.js';

uppercaseString("hello");
lowercaseString("WORLD!");

/* Suppose you have a file and you wish to import all of its contents into the current file.
 * This can be done with the 'import * as' syntax.
 *
 * Use the 'import * as' syntax to import everything from the file into an object called stringFunctions
 */
import * as stringFunctions from './string_functions.js';

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!"); 

/* There is another export syntax you need to know, export default. Usually you will use this syntax if
 * only one value is being exported from a file. It is also used to create a fallback value for a file or
 * module.
 * 
 * Since export default is used to declare a fallback value for a module or file, you can only have one
 * value be a default export in each module or file. Additionally, you cannot use export default with var,
 * let, or const
 * 
 * The following function should have a fallback value for the module. Add the necessary code to do so.
 */
export default function subtract(x, y) {
    return x - y;
}

/* To import a default export, you need to use a different import syntax.
 *
 * In the following example, 'add' is the default export of the math_function.js file. Here is how to
 * import it:
 * 
 * import add from "./math_functions.js";
 * 
 * The syntax differs in one key place. The imported value, add, is not surrounded by curly braces.
 * add here is simply a variable name for whatever the default export is. You can use any name here when
 * importing a default.
 * 
 * In the following code, import the default export from the math_functions.js, give the import the name
 * 'subtract'.
 */
import subtract from './math_functions.js';

subtract(7,4);

/* A promise in JavaScript is to make a promise to do something, usually asynchronously.
 * 
 * When the task completes, you either fulfill your promise or fail to do so.
 * 
 * Promise is a constructor function, so you need to use the 'new' keyword to create one.
 * 
 * It takes a function, as its argument, with two parameters - resolve and reject. These methods
 * used to determine the outcome of the promise. 
 * 
 * The syntax looks like this:
 * 
 * const myPromise = new Promise((resolve, reject) => {
 * 
 * });
 * 
 * Create a new promise called makeServerRequest. Pass in a function with resolve and reject parameters
 * to the constructor.
 */
const makeServerRequest = new Promise((resolve, reject) => {});

/* A promise has three states: pending, fulfilled, and rejected. The promise you created in the last
 * challenge is forever stuck in the pending state because you did not add a way to complete the promise.
 * 
 * The resolve and reject parameters given to the promise argument are used to do this. resolve is when you
 * want your promise to succeed, and reject is when you want it to fail. These are methods that take an
 * argument.
 * 
 * Example:
 * 
 * const myPromise = new Promise((resolve, reject) => {
 *  if (//condition here//) {
 *      resolve("Promise was fulfilled");
 *  } else {
 *      reject("Promise was rejected");
 *  }
 * });
 * 
 * The example uses strings for the argument of these functions, but it could be anything. Often, it might
 * be an object, that you would use data from, to put on your website or elsewhere.
 * 
 * Make the promise handle success and failure. If responseFromServer is true, call the resolve method to
 * successfully complete the promise. Pass resolve a string with the value 'We got the data'. 
 * If responseFromServer is false, use the reject method instead and pass it the string: 'Data not received'.
 */
const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;

    if(responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});

/* Promises are most useful when you have a process that takes an unknown amount of time in your code
 * (i.e. something asynchronous), often a server request. 
 *
 * When you make a server request it takes some amount of time, and after it completes you usually want
 * to do something with the response from the server. This can be achieved by using the then method.
 * 
 * The then method is executed immediately after your promise is fulfilled with resolve. Here's an example:
 * 
 * myPromise.then(result => {
 * 
 * });
 * 
 * Add the then method to your promise. Use result as the parameter of its callback function and log result
 * to the console.
 */
const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;

    if(responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }

    makeServerRequest.then(result => {
        console.log(result);
    });
});

/* catch is the method used when your promise has been rejected. It is executed immediately after a
 * promise's reject method is called. Here's the syntax:
 *
 * myPromise.catch(error => {
 * 
 * });
 * 
 * error is the argument passed in to the reject method.
 * 
 * Add the catch method to your promise. Use error as the parameter of its callback function and log error
 * to the console.
 */
const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;

    if(responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});

makeServerRequest.then(result => {
    console.log(result);
});

makeServerRequest.catch(error => {
    console.log(error);
});