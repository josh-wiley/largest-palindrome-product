/*
 * Author: Josh Wiley
 * Program: Find the largest palindrome product of two 3-digit numbers
 */

// Constants.
const MIN_OPERAND = 100;
const MAX_OPERAND = 999;
const STEP_SIZE = 1000;

// Add Array <-> Integer conversions.
require('./addArrayIntegerConversions.js')();

// Success flag.
let success = false;

// Start time.
console.time('Time');

// Get initial product to start from.
let product = MAX_OPERAND * MAX_OPERAND;

// Step down if starting palindrome is greater than the initial product.
if (createPalindromeFromFirstHalf(product.toArray()).toInteger() > product) {
    product -= STEP_SIZE;
}

// Get largest palindrome product of two 3-digit numbers.
while (!success) {

    // Exhausted possibilities?
    if (!product) {
        product = 'N/A';
        break;
    }

    // Create palindrome from first half.
    digits = createPalindromeFromFirstHalf(product.toArray());

    // Is divisible by 3-digit numbers?
    for (let i = MAX_OPERAND; i >= MIN_OPERAND; i--) {

        // Quotient.
        let quotient = digits.toInteger() / i;

        // Evenly divisible by 3 digit number?
        if (quotient <= MAX_OPERAND && Number.isInteger(quotient)) {

            // Success!
            success = true;
            break;

        }

    }

    // Step down.
    product -= STEP_SIZE;

}

// Display result.
console.log('\n');
console.timeEnd('Time');
console.log(`\nLargest palindrome: ${digits.toInteger()}\n`);

// Create palindrome from first half.
function createPalindromeFromFirstHalf(digits) {

    // Get end of first half and start of second half.
    let firstHalfEndIndex = Math.floor((digits.length - 1) / 2);
    let secondHalfStartIndex = Math.ceil(digits.length / 2);

    // Create palindrome.
    for (let i = 0; i < secondHalfStartIndex; i++) {
        digits[secondHalfStartIndex + i] = digits[firstHalfEndIndex - i];
    }

    // Return.
    return digits;

}
