// SOLUTION 1

/*
function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] !== array[j] && array[i] + array[j] === targetSum) {
        return [array[i], array[j]];
      }
    }
  }
  return [];
}
*/

// SOLUTION 2

/*
function twoNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  let leftMost = 0;
  let rightMost = array.length - 1;
  while (leftMost < rightMost) {
    currentSum = array[leftMost] + array[rightMost];
    if (currentSum === targetSum) {
      return [array[leftMost], array[rightMost]];
    } else if (currentSum < targetSum) {
      leftMost += 1;
    } else if (currentSum > targetSum) {
      rightMost -= 1;
    }
  }
  return [];
}
*/

// SOLUTION 3

function twoNumberSum(array, targetSum) {
  let hashTable = {};
  for (let num of array) {
    if (targetSum - num in hashTable) {
      return [num, targetSum - num];
    }
    hashTable[num] = true;
  }
  return [];
}

module.exports = twoNumberSum;
