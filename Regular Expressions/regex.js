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

/* You can search for multiple patterns using the alternation or OR operator: |
 * 
 * This operator matches patterns either before or after it. For example, if you wanted to match the strings
 * yes or no, the regex you want is /yes|no/
 * 
 * You can also search for more than just two patterns. You can do this by adding more patterns with more
 * OR operators separating them, like /yes|no|maybe/
 * 
 * Complete the regex petRegex to match the pets dog, cat, bird, or fish
 */
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);

/* Case (or sometimes letter case) is the difference between uppercase letters and lowercase letters. Example
 * of uppercase are A, B, and C. Examples of lowercase are a, b, and c.
 *
 * You can match both cases using what is called a flag. There are other flags but here you'll focus on the flag
 * that ignores the case - the i flag. You can use it by appending it to the regex.
 * 
 * An example of using this flag is /ignorecase/i
 * 
 * This regex can match the strings ignorecase, igNoreCase, and IgnoreCase.
 * 
 * Write a regex fccRegex to match freeCodeCamp, no matter its case. Your regex should not match any abbreviations
 * or variations with spaces.
 */
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
let result = fccRegex.test(myString);