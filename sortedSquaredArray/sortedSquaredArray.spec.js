const { expect } = require("chai");
const sortedSquaredArray = require("./sortedSquaredArray");

describe("sortedSquaredArray", () => {
  it("should return a new array with the squared elements from the input array in ascending order", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    expect(sortedSquaredArray(numbers)).to.be.an("array");
    expect(numbers === sortedSquaredArray(numbers)).to.be.false;
    expect(sortedSquaredArray(numbers)).to.deep.equal([
      1, 4, 9, 16, 25, 36, 49, 64,
    ]);
  });
});
