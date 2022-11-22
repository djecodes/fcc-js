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