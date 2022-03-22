const { expect } = require("chai");
const caesarDecipher = require("./caesarDecipher");

describe("caesarDecipher", () => {
  const message1 = "QEB NRFZH YOLTK CLU GRJMBA LSBO QEB IXWV ALD";
  const key1 = 3;

  it("should return the encoded version of the message", () => {
    expect(caesarDecipher(message1, key1)).to.equal(
      "THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG"
    );
  });

  const message2 = "OHCL FVB LCLY OLHYK VM AOL IFGHUAPUL NLULYHSZ WYVISLT?";
  const key2 = 19;

  it("should return a valid secret when message uses mixed cases and has punctuation", () => {
    expect(caesarDecipher(message2, key2)).to.equal(
      "HAVE YOU EVER HEARD OF THE BYZANTINE GENERALS PROBLEM?"
    );
  });

  const message3 = "YMJD XFB FGTZY 5 BTQAJX HNWHQNSL YMJ KNJQI!";
  const key3 = 99;

  it("should return a valid secret with keys larger than 26", () => {
    expect(caesarDecipher(message3, key3)).to.equal(
      "THEY SAW ABOUT 5 WOLVES CIRCLING THE FIELD!"
    );
  });
});
