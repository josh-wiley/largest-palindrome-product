// Export.
module.exports = () => {

    // Integer to array of integers.
    Number.prototype.toArray = function () {

        // Value and digits array.
        let value = this;
        let digits = [];

        // Get array of digits.
        while (value) {

            // Insert least signifant digit.
            digits.unshift(value % 10);

            // Shift out least-significant digit.
            value = Math.floor(value / 10);

        }

        // Return array.
        return digits;

    };

    // Array of integers to integer.
    Array.prototype.toInteger = function () {

        // Integer value.
        let value = 0;

        // Accumulate digits.
        for (let i = 0; i < this.length; i++) {

            // Add to value.
            value += this[i] * Math.pow(10, this.length - i - 1);

        }

        // Return integer value.
        return value;

    };

}