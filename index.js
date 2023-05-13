const romanNumbersTable = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const romanNumeralConverter = (romanNumber) => {
  let response = 0;

  for (let i = 0; i < romanNumber.length; i++) {
    if (
      i <= romanNumber.length - 1 &&
      romanNumbersTable[romanNumber[i]] < romanNumbersTable[romanNumber[i + 1]]
    ) {
      response -= romanNumbersTable[romanNumber[i]];
      continue;
    }

    response += romanNumbersTable[romanNumber[i]];
  }

  return response;
};

module.exports = { romanNumeralConverter };
