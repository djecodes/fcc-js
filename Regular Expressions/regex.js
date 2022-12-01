/* Regular expressions are used in programming languages to match parts of strings. You create patterns to help you do that matching.
 * If you want to find the word 'the' in the string 'The dog chased the cat', you could use the following regular expression: /the/
 * Notice that quote marks are not required within the regular expression.
 * 
 * JS has multiple ways to use regexes. One way to test a regex is using the .test() method. The .test() method takes the regex,
 * applies it to a string (which is placed inside the parentheses), and returns true or false if your pattern finds something or not.
 * 
 * Apply the regex myRegex on the string myString using the .test() method.
 */
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);

/* In the previous challenge, you searched for the word Hello using the regex /Hello/. That regex searched for a literal match of the string 'Hello'.
 *
 * It's important to note any other forms of Hello wouldn't have matched. regex will not match /Hello/ with hello or HELLO.
 * 
 * Complete the regex waldoRegex to find "Waldo" in the string waldoIsHiding with a literal match.
 */
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
let result = waldoRegex.test(waldoIsHiding);