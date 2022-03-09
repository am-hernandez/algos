/* Solution 1, using array method .map()

function sortedSquaredArray(array) {
  return array
    .map((element) => {
      return element * element;
    })
    .sort((a, b) => a - b);
}

*/

/* Solution 2, manually creating new Array instance */

function sortedSquaredArray(array) {
  const newArray = new Array(array.length);
  for (let i = 0; i < array.length; i++) {
    newArray[i] = array[i] * array[i];
  }
  return newArray.sort((a, b) => a - b);
}

module.exports = sortedSquaredArray;
