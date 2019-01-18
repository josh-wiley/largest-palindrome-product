const integerToArray = value => {
  // no value?
  if (!value) {
    return [0];
  }

  // output array
  let digits = [];

  // as long as there is a value...
  while (value) {
    // prepend least significant digit
    digits.unshift(value % 10);

    // shift right
    value = Math.floor(value / 10);
  }

  // return
  return digits;
};

const arrayToInteger = array => {
  // no array, no integer
  if (!array) {
    return null;
  }

  // reduce digits to single integer value
  const reducer = (value, aggregate, i, arr) =>
    aggregate + value * Math.pow(10, arr.length - i - 1);

  // reduce digits to single integer value & return
  return array.reduce(reducer, 0);
};

// export
module.exports = { integerToArray, arrayToInteger };
