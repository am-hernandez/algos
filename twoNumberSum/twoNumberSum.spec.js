const { expect } = require("chai");
const twoNumberSum = require("./twoNumberSum");

let output;

beforeEach(() => {
  output = twoNumberSum([5, 8, -3, 1, 9, -1, 7, 4], 16);
});

describe("twoNumberSum", () => {
  it("should return an array of length 2 if a mtach was found", function () {
    expect(Array.isArray(output)).to.deep.equal(true);
    expect(output.length === 2).to.deep.equal(true);
  });

  it("should return the two numbers in the array whose sum is equal to targetSum", function () {
    expect(output.includes(9)).to.deep.equal(true);
    expect(output.includes(7)).to.deep.equal(true);
  });

  it("should return an empty array if no match is found", function () {
    output = twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 15);
    expect(Array.isArray(output)).to.deep.equal(true);
    expect(output).to.deep.equal([]);
  });
});
