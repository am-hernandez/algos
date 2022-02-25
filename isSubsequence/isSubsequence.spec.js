const { expect } = require("chai");
const isSubsequence = require("./isSubsequence");

describe("isSubsequence", () => {
  it("should return true if the second argument is a valid subsequence of the first argument", () => {
    expect(isSubsequence([1, 2, 3, 4, 5], [2, 3, 5])).to.equal(true);
    expect(isSubsequence([-3, -1, 0, 9, 28, 30], [-1, 9, 28, 30])).to.equal(
      true
    );
  });
  it("should return true even if the subsequence contains one element", () => {
    expect(isSubsequence([-3, -1, 0, 9, 28, 30], [-1])).to.equal(true);
  });
  it("should return false if the second argument is not a valid subsequence of the firts", () => {
    expect(isSubsequence([1, 2, 3, 4, 5], [2, 4, 3])).to.equal(false);
    expect(isSubsequence([-3, -1, 0, 9, 28, 30], [-1, 9, 30, 28])).to.equal(
      false
    );
  });
});
