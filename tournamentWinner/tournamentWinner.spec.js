const { expect } = require("chai");
const tournamentWinner = require("./tournamentWinner");

describe.only("tournamentWinner", () => {
  it("should return the correct winner of the tournament of animals", () => {
    const competitions = [
      ["Mice", "Pandas"],
      ["Pandas", "Pythons"],
      ["Pythons", "Mice"],
    ];
    const results = [1, 0, 0];
    expect(tournamentWinner(competitions, results)).to.equal("Mice");
  });

  it("should return the correct winner of the tournament of engineers", () => {
    const competitions = [
      ["Electricutioners", "Chemimaniacs"],
      ["Informationists", "Electricutioners"],
      ["Chemimaniacs", "Informationists"],
      ["Electricutioners", "Biohazards"],
      ["Chemimaniacs", "Mechadestroyers"],
      ["Mechadestroyers", "Informationists"],
      ["Biohazards", "Mechadestroyers"],
      ["Biohazards", "Chemimaniacs"],
      ["Informationists", "Biohazards"],
      ["Mechadestroyers", "Electricutioners"],
    ];
    const results = [1, 0, 1, 1, 0, 0, 1, 0, 1, 0];
    expect(tournamentWinner(competitions, results)).to.equal(
      "Electricutioners"
    );
  });
});
