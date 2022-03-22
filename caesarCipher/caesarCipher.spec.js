const { expect } = require("chai");
const caesarCipher = require("./caesarCipher");

describe("caesarCipher", () => {
  const message1 = "THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG";
  const key1 = 3;

  it("should return the encoded version of the message", () => {
    expect(caesarCipher(message1, key1)).to.equal(
      "QEB NRFZH YOLTK CLU GRJMBA LSBO QEB IXWV ALD"
    );
  });

  const message2 = "Have you ever heard of The Byzantine Generals problem?";
  const key2 = 19;

  it("should return a valid secret when message uses mixed cases and has punctuation", () => {
    expect(caesarCipher(message2, key2)).to.equal(
      "OHCL FVB LCLY OLHYK VM AOL IFGHUAPUL NLULYHSZ WYVISLT?"
    );
  });

  const message3 = "They saw about 5 wolves circling the field!";
  const key3 = 99;

  it("should return a valid secret with keys larger than 26", () => {
    expect(caesarCipher(message3, key3)).to.equal(
      "YMJD XFB FGTZY 5 BTQAJX HNWHQNSL YMJ KNJQI!"
    );
  });
});
