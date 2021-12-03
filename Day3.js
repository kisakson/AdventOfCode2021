// Part 1

const input = '', // Copy/paste in from https://adventofcode.com/2021/day/3/input
  inputArray = input.split('\n'),
  binaryInputLength = inputArray[0].length,
  columnCounts = new Array(binaryInputLength).fill(0);

for (let i = 0; i < inputArray.length; i++) {
  const currentLine = inputArray[i];
  
  for (let j = 0; j < binaryInputLength; j++) {
    // Add 1 if char is 1, minus 1 if char is 0. If number is positive, there were more 1s, or negative if more 0s.
    columnCounts[j] += currentLine.charAt(j) === '1' ? 1 : -1;
  }
}

function createDecimalValueFromArrayCounts(array, isGamma) {
  const binaryArray = array.map(count => count > 0
    ? (isGamma ? 1 : 0)
    : (isGamma ? 0 : 1)),
    binaryString = binaryArray.join('');
    return parseInt(binaryString, 2);
}
  
const decimalGamma = createDecimalValueFromArrayCounts(columnCounts, true),
  decimalEpsilon = createDecimalValueFromArrayCounts(columnCounts, false);

// Answer
window.console.log(decimalGamma * decimalEpsilon)

// Part 2

function findLifeSupportValue(inputArray, isOxygen) {
  let currentArray = inputArray;
  for (let i = 0; i < inputArray[0].length; i++) {
    const mostCommonBit = findMostCommonBitAtPosition(currentArray, i);

    currentArray = currentArray.filter(input =>
      isOxygen
      ? input.charAt(i) == mostCommonBit
      : input.charAt(i) != mostCommonBit
    );
    
    if (currentArray.length === 1) {
      return currentArray[0];
    }
  }
}

function findMostCommonBitAtPosition(inputArray, position) {
  let counter = 0;
  inputArray.forEach(input =>
    counter += input.charAt(position) === '1' ? 1 : -1
  );
  
  return counter >= 0 ? 1 : 0;
}

const oxygenGeneratorRating = parseInt(findLifeSupportValue(inputArray, true), 2),
  co2ScrubberRating = parseInt(findLifeSupportValue(inputArray, false), 2);
  
// Answer
window.console.log(oxygenGeneratorRating * co2ScrubberRating)
