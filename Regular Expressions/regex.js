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

/* You can extract the actual matches of patterns existing or not within a string using the .match() method.
 * To use the .match() method, apply the method on a string and pass in the regex inside the parentheses.
 *
 * Example:
 * let ourStr = "Regular expressions";
 * let ourRegex = /expressions/;
 * ourStr.match(ourRegex);
 * 
 * Apply the .match() method to extract the string coding.
 */
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);

/* So far, you've only been able to extract or search a pattern once.
 * 
 * To search or extract a pattern more than once, you can use the global search flag: g.
 *
 * Using the regex starRegex, find and extract both Twinkle words from the string twinkleStar.
 */
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result = twinkleStar.match(starRegex);

/* Sometimes you won't know the exact characters in your patterns. Thinking of all words that match would
 * take a long time. Luckily, you can save time using the wildcard character: .
 *
 * The wildcard character will match any one character.
 * 
 * Complete the regex unRegex so that it matches the strings run, sun, fun, pun, nun, and bun.
 */
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result = unRegex.test(exampleStr);

/* You can search for literal pattern with some flexibility with character classes. Character classes allow
 * you to define a group of character you wish to match by placing them inside square brackets.
 *
 * For example, you want to match bag, big, and bug but not bog. You can create the regex /b[aiu]g/ to do
 * this. The [aiu] is the character class that will only match characters a, i, or u.
 * 
 * Use a character class with vowels (a,e,i,o,u) in your regex vowelRegex to find all the vowels in the
 * string quoteSample.
 */
let quoteSample = "Beware of bugs in above the code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let result = quoteSample.match(vowelRegex);

/* In a character set, you can define a range of characters to match using a hypen character: -
 *
 * For example, to match lowercase letters a through e you would use [a-e].
 * 
 * Match all the letters in the string quoteSample.
 */
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let result = quoteSample.match(alphabetRegex);

/* Using the hyphen to match a range of characters is not limited to letters. It also works to match a
 * range of numbers.
 *
 * For example, /[0-5]/ matches any number between 0 and 5, including the 0 and 5. Also, it is possible
 * to combine a range of letters and numbers in a single character set.
 * 
 * let jennyStr = "Jenny8675309";
 * let myRegex = /[a-z0-9]/ig;
 * 
 * Create a single regex that matches a range of letters between h and s, and a range of numbers between
 * 2 and 6. Remember to include the appropriate flags in regex.
 */
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi;
let result = quoteSample.match(myRegex);

/* You have created a set of characters that you want to match, but you can also create a set of characters
 * that you do not want to match. These types of character sets are called negated character sets.
 *
 * To create a negated character set, you place a caret character (^) after the opening bracket and before
 * the characters you do not want to match.
 * 
 * For example, /[^aeiou]/gi matches all characters that are not a vowel.
 * 
 * Create a single regex that matches all characters that are not a number or a vowel.
 */
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou^0-9]/gi;
let result = quoteSample.match(myRegex);

/* If you need to match a character (or group of them) that appears one or more times in a row. You can use
 * the + character to check if it may be repeated. Remember, the character or pattern has to be present
 * consecutively. That is, the character has to repeat one after the other.
 * 
 * For example, /a+/g would find one match in abc and return ["a"]. Because of the +, it would also find a
 * single match in aabc and return ["aa"].
 * 
 * You want to find matches when the letter s occurs one or more times in Mississippi. Write a regex that
 * uses the + sign.
 */
let difficultSpelling = "Mississippi";
let myRegex = /s+/g;
let result = difficultSpelling.match(myRegex);

/* The last challenge used + to look for characters that occur one or more times. There's also an option
 * that matches characters that occur zero or more times.
 *
 * The character to do this is the asterisk
 * 
 * For this challenge, create a regex chewieRegex that uses the * character to match an uppercase A
 * character immediately followed by zero or more lowercase a characters in chewieQuote. Your regex does
 * not need flags or character classes, and it should not match any of the other quotes.
 */
let chewieRegex = /Aa*/g;
let result = chewieQuote.match(chewieRegex);

/* In regular expressions, a greedy match finds the longest possible part of a string that fits the regex
 * pattern and returns it as a match. The alternative is called a lazy match, which finds the smallest 
 * possible part of the string that satisfies the regex pattern.
 * 
 * You can apply the regex /t[a-z]*i/ to the string "titanic". This regex is basically a pattern that starts
 * with t, ends with i, and has some letters in between.
 * 
 * Regular expressions are by default greedy, so the match would return ["titani"]. It finds the largest
 * sub-string possible to fit the pattern.
 * 
 * However, you can use the ? character to change it to lazy matching. "titanic" matched against the
 * adjusted regex of /t[a-z]*?i/ returns ["ti"].
 * 
 * Find the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>".
 */
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/;
let result = text.match(myRegex);

/* Find One or More Criminals in a Hunt:
 * 
 * A group of criminals escaped from jail and ran away, but you don't know how many. However you do know
 * that they stay close together when they are around other people. You are responsible for finding all of
 * the criminals at once.
 * 
 * Write a greedy regex that finds one or more criminals within a group of other people. A criminal is
 * represented by the capital letter C.
 */
let reCriminals = /C+/;

/* Outside of character set, the caret is used to search for patterns at the beginning of strings.
 * 
 * Use the caret character in a regex to find Cal only in the beginning of the string rickyAndCal.
 */
let rickyAndCal = "Cal and Ricky both like racing";
let calRegex = /^Cal/;
let result = calRegex.test(rickyAndCal);

/* There is also a way to search for patterns at the end of strings. You can search the end of strings
 * using the dollar sign character $ at the end of the regex.
 *
 * Use the anchor character ($) to match the string caboose at the end of the string caboose.
 */
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let result = lastRegex.test(caboose);

/* Using character classes, you were able to search for all letters of the alphabet with [a-z]. This kind
 * of character class is common enough that there is a shortcut for it, although it includes a few extra
 * characters as well.
 * 
 * The closest character class in JS to match the alphabet is /w. This shortcut is equal to [A-Za-z0-9_].
 * This character class matches upper and lowercase letters plus numbers. Note, this character class also
 * includes the underscore character (_).
 * 
 * Use the shorthand character class /w to count the number of alphanumeric characters in various quotes
 * and strings.
 */
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g;
let result = quoteSample.match(alphabetRegexV2).length;

/* You can search for the opposite of alphanumerics (\w) with \W.
 * 
 * Use the shorthand character \W to count the number of non-alphanumeric characters in
 * various quotes and strings.
 */
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;
let result = quoteSample.match(nonAlphabetRegex).length;

/* The shortcut to look for digit characters is \d, with a lowercase d. This is equal to
 * the character class [0-9]. which looks for a single character of any number between zero
 * and nine.
 * 
 * Use the shorthand character class \d to count how many digits are in movie titles.
 * Written out numbers ("six" instead of 6) do not count.
 */
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;
let result = movieName.match(numRegex).length;

/* The shortcut to look for non-digital characters is \D. This is equal to the character
 * class [^0-9], which looks for a single character that is not a number between zero and nine
 * 
 * Use the shorthand character class for non-digits \D to count how many non-digits are in
 * movie titles.
 */

let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g;
let result = movieName.match(numRegex).length;

/* Restrict Possible Usernames Challenge:
 *
 * Usernames are used everywhere on the internet. They are what give users a unique identity
 * on their favorite sites.
 * 
 * You need to check all the usernames in a database. Here are some simple rules that users
 * have to follow when creating their username.
 * 
 * 1. Usernames can only use alpha-numeric characters.
 * 2. The only numbers in the username have to be at the end. There can be zero or more of
 * them at the end. Username cannot start with the number.
 * 3. Username letters can be lowercase and uppercase.
 * 4. Usernames have to be at least two characters long. A two-character username can only
 * use alphabet letters as characters.
 * 
 * Change the regex userCheck to fit the constraints listed above.
 */
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result = userCheck.test(username);

/* You can search for whitespace using \s, which is a lowercase s. This pattern not only
 * matches whitespace, but also carriage return, tab, form feed, and new line characters.
 * You can think of it as similar to the character class [ \r\t\f\n\v]
 * 
 * Change the regex countWhiteSpace to look for multiple whitespace characters in a string.
 */
let sample = "Whitespace is important in separating words.";
let countWhiteSpace = /\s/g;
let result = sample.match(countWhiteSpace);

/* Search for non-whitespace using \S. This pattern will not match whitespace, carriage return,
 * tab, form feed, and new line characters. You can think of it being similar to the character class
 *
 * [^\r\t\f\n\v]
 * 
 * Change the regex countNonWhiteSpace to look for multiple non-whitespace characters in a string
 */
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);

/* You can specify the lower and upper number of patterns with quantity specifiers. Quantity specifiers 
 * are used with curly brackets. You put two numbers between the curly brackets - for the lower and upper 
 * number of patterns.
 * 
 * For example, to match only the letter a appearing between 3 and 5 times in the string ah, your regex would be /a{3,5}/
 * 
 * Change the regex ohRegex to match the entire phrase Oh no only when it has 3 to 6 letter h's
 */
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/;
let result = ohRegex.test(ohStr);

/* To only specify the lower number of patterns, keep the first number followed by a comma.
 * 
 * For example, to match only the string hah with the letter a appearing at least 3 times, the regex would be
 * /ha{3,}h/
 * 
 * Change the regex haRegex to match the word Hazzah only when it has four or more letter z's
 */
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/;
let result = haRegex.test(haStr);

/* To specify a certain number of patterns, just have that one number between the curly brackets.
 * 
 * For example, to match only the word hah with the letter 'a' 3 times, your regex would be /ha{3}h/
 * 
 * let multipleHA = /ha{3}h/;
 * 
 * Change the regex timRegex to match the word Timber only when it has four letter m's
 */
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/;
let result = timRegex.test(timStr);

/* You can specify the possible existence of an element with a question mark, ?. This checks for zero
 * or one of the preceding element. You can think of this symbol as saying the previous element is 
 * optional.
 * 
 * For example, there are slight differences in American and British English and you can use the question 
 * mark to match both spellings.
 * 
 * let american = "color";
 * let british = "colour";
 * let rainbowRegex = /colou?r/;
 * 
 * Change the regex favRegex to match both the American English (favorite) and the British English (favourite)
 * version of the world.
 */
let favWord = "favorite";
let favRegex = /favou?rite/;
let result = favRegex.test(favWord);

/* Lookaheads are patterns that tell JS to look-ahead in your string to check for patterns further along. 
 * This can be useful when you want to search for multiple patterns over the same string.
 *
 * There are two kinds of lookaheads:
 * Positive lookahead will look to make sure the element in the search pattern is there, but won't actually 
 * match it. A positive lookahead is used as (?=...) where the ... is the required part that is not matched.
 * 
 * Negative lookahead will look to make sure the element in the search pattern is not there. A negative lookahead
 * is used as (?!...) where the ... is the pattern that you do not want to be there. The rest of the pattern is
 * returned if the negative lookahead part is not present.
 * 
 * Examples of lookaheads:
 * 
 * let quRegex= /q(?=u)/; //positive lookahead
 * let gRegex = /q(?!u)/; //negative lookahead
 * 
 * Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two
 * consecutive digits.
 */
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/;
let result = pwRegex.test(sampleWord);

/* Sometimes we want to check for groups of characters using a Regular Expression and to achieve that we use parentheses.
 * 
 * Fix the regex so that it checks for the names of Franklin Roosevelt or Eleanor Roosevelt in a case sensitive manner and
 * it should make concessions for middle name.
 * 
 * Then fix the code so that the regex that you have created is checked against myString and either true or false is returned
 * depending on whether the regex matches.
 */

let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin D.|Eleanor) Roosevelt/;
let result = myRegex.test(myString);

/* Capture groups are constructed by enclosing the regex pattern to be captured in parentheses. 
 *
 * The substring matched by the group is saved to a temporary "variable", which can be accessed within the same regex
 * using a backslash and the number of the capture group (e.g. \1). Capture groups are automatically numbered by the
 * position of their opening parentheses (left to right), starting at 1.
 * 
 * The example below matches a word that occurs thrice separated by spaces:
 * let repeatRegex = /(\w+) \1 \1/;
 * 
 * Use capture groups in the reRegex to match a string that consist of only the same number repeated exactly three times
 * separated by single spaces.
 */
let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/;
let result = reRegex.test(repeatNum);

/* You can search and replace text in a string using .replace() on a string. The inputs for .replace() is first the regex
 * pattern you want to search for. The second parameter is the string to replace the match or a function to do something.
 *
 * let wrongText = "The sky is silver";
 * let silverRegex = /silver/;
 * wrongText.replace(silverRegex, "blue"); 
 * 
 * You can also access capture groups in the replacement string with dollar signs ($)
 * 
 * "Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
 * 
 * 1.) Write a regex fixRegex using three capture groups that will search for each word in the string one two three. 
 * 2.) Then update the replaceText variable to replace one two three with the string three two one and assign the result to the result variable. 
 * 3.) Make sure you are utilizing capture groups in the replacement string using the dollar sign ($) syntax.
 */
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/;
let replaceText = "$3 $2 $1"; 
let result = str.replace(fixRegex, replaceText);

/* Sometimes whitespace characters around strings are not wanted but are there.
 * Typical processing of strings is to remove the whitespace at the start and end of it.
 *
 * 
 * Write a regex and use the appropriate string methods to remove whitespace at the beginning
 * and end of strings.
 */
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; 
let result = hello.replace(wsRegex, "");