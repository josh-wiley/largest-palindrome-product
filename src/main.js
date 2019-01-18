/*
 * Author: Josh Wiley
 * Program: Find the largest palindrome product of any two 3-digit numbers
 */

// imports
const {
  arrayToInteger,
  integerToArray
} = require("./array-integer-conversions");
const { generatePalindrome } = require("./generate-palindrome");

// register conversions with prototypes
Number.toArray = integerToArray;
Array.toInteger = arrayToInteger;

// Constants.
const MIN_OPERAND = 100;
const MAX_OPERAND = 999;
const STEP_SIZE = 1000;

// success flag
let success = false;

// start timer
console.time("Time");

// start with largest product of two 3-digit integers
let product = Math.pow(MAX_OPERAND, 2);

// generate palindrome from product
const productArray = Number.toArray(product);
let palindrome = generatePalindrome(productArray);

// step down if the generated palindrome is greater than the product
if (Array.toInteger(palindrome) > product) {
  product -= STEP_SIZE;
}

// find largest palindrome of two 3-digit integers
while (!success) {
  // exhausted all possibilities?
  if (!product) {
    console.log(
      "Exhausted all possibilities. No palindrome matching the specified constraints was found."
    );
    break;
  }

  // generate palindrome
  palindrome = generatePalindrome(Number.toArray(product));

  // product of two 3-digit integers?
  const dividend = Array.toInteger(palindrome);
  for (let i = MAX_OPERAND; i >= MIN_OPERAND && !success; i--) {
    // get quotient
    let quotient = dividend / i;

    // is quotient 3-digit integer?
    success =
      quotient <= MAX_OPERAND &&
      quotient >= MIN_OPERAND &&
      Number.isInteger(quotient);
  }

  // Step down.
  product -= STEP_SIZE;
}

// Display result.
console.log("\n");
console.timeEnd("Time");
console.log(`\nLargest palindrome: ${Array.toInteger(palindrome)}\n`);
