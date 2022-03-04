const { expect } = require("chai");
const findThreeLargestNumbers = require("./findThreeLargestNumbers");

describe("findThreeLargestNumbers", () => {
  it("should return the three largest numbers from input array sorted in ascending order", () => {
    expect(
      findThreeLargestNumbers([1, -5, 99, -28, 43, -100, 102, 6, 9])
    ).to.deep.equal([43, 99, 102]);

    expect(findThreeLargestNumbers([9, 9, 9])).to.deep.equal([9, 9, 9]);

    expect(findThreeLargestNumbers([7, -1, 6])).to.deep.equal([-1, 6, 7]);
  });

  it("should return an array", () => {
    const numbers = [1, -5, 99, -28, 43, -100, 102, 6, 9];
    expect(findThreeLargestNumbers(numbers)).to.be.an("array");
  });
});
