# Roman Numeral to Arabic Number Converter

This is a small program that converts Roman numerals to Arabic numbers using a conversion table.

## How it works

The program has a function called romanNumeralConverter that accepts a Roman numeral as input and returns the equivalent Arabic number. The function uses a conversion table that maps Roman symbols to the corresponding numerical values.

Usage example:

```
    const { romanNumeralConverter } = require('./romanNumeralConverter.js');

    console.log(romanNumeralConverter('IV')); // Result: 4
```

## Testing

This program includes automated unit tests using Jest. The tests are located in the `romanNumeralConverter.test.js` file. Several tests have been defined to verify that the `romanNumeralConverter` function correctly converts different Roman numerals to Arabic numbers.

To run the tests, use the following command:

```
    npm test
```

## Contributions

If you find any errors or have any ideas for improving this program, feel free to create a pull request or open an issue on the GitHub repository.
