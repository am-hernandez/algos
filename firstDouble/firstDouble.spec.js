const { expect } = require("chai");
const firstDouble = require("./firstDouble");

describe("firstDouble", () => {
  it("should return the first instance of double characters in a string", () => {
    expect(firstDouble("bazaar")).to.equal("aa");
    expect(firstDouble("1-800-257-8999")).to.equal("00");
  });
  it("should return the first instance of double characters in a number", () => {
    expect(firstDouble(8964772991)).to.equal(77);
  });
  it("should return false if there are no double characters found", () => {
    expect(firstDouble("pamphlet")).to.equal(false);
    expect(firstDouble(1234567)).to.equal(false);
  });
});
