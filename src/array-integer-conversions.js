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
  const reducer = (aggregate, value, i, array) =>
    aggregate + value * Math.pow(10, array.length - i - 1);

  // reduce digits to single integer value & return
  return array.reduce(reducer, 0);
};

// export
module.exports = { integerToArray, arrayToInteger };
