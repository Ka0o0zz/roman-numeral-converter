const { romanNumeralConverter } = require("../index.js");

test("The romanNumeralConverter function converts the Roman numeral IV correctly.", () => {
  expect(romanNumeralConverter("IV")).toBe(4);
});

test("The romanNumeralConverter function converts the Roman numeral XCIX correctly.", () => {
  expect(romanNumeralConverter("XCIX")).toBe(99);
});

test("The romanNumeralConverter function converts the Roman numeral CDXXI correctly.", () => {
  expect(romanNumeralConverter("CDXXI")).toBe(421);
});
