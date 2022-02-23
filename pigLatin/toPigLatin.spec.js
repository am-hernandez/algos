const { expect } = require("chai");
const toPigLatin = require("./toPigLatin");

describe("toPigLatin", () => {
  it("should return the of the input statement", () => {
    expect(toPigLatin("Pig latin is cool.")).to.equal(
      "igpay atinlay siay oolcay."
    );
    expect(toPigLatin("Hello world!")).to.equal("ellohay orldway!");
    expect(toPigLatin("I know this is a great place")).to.equal(
      "iay nowkay histay siay aay reatgay lacepay"
    );
    expect(toPigLatin("We can't do this.")).to.equal(
      "eway an'tcay oday histay."
    );
    expect(toPigLatin("Is this the way?")).to.equal("siay histay hetay ayway?");
  });
});
