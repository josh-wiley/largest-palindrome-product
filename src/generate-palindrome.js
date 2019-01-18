/*
 * input: array of integers
 * output: array of integers
 * description: generates palindrome depending on first half of array
 */
const generatePalindrome = digits => {
  // no digits?
  if (!digits) {
    return [];
  }

  // copy input array for output
  const palindrome = digits.map(x => x);

  // get index of end of first-half of the array
  const firstHalfEndIndex = Math.floor((digits.length - 1) / 2);

  // get index of beginning of last-half of the array
  const secondHalfStartIndex = Math.ceil(digits.length / 2);

  // generate palindrome
  for (let i = 0; i < secondHalfStartIndex; i++) {
    palindrome[secondHalfStartIndex + i] = palindrome[firstHalfEndIndex - i];
  }

  // return
  return palindrome;
};

module.exports = { generatePalindrome };
