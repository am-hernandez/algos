function findThreeLargestNumbers(array) {
  let first, second, third;
  for (let num of array) {
    if (!third || num >= third) {
      first = second;
      second = third;
      third = num;
    } else if (!second || num >= second) {
      first = second;
      second = num;
    } else if (!first || num >= first) {
      first = num;
    }
  }
  return [first, second, third];
}

module.exports = findThreeLargestNumbers;
