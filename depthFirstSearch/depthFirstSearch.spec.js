const { expect } = require("chai");
const Node = require("./depthFirstSearch");

let root = new Node("A");
root.addChild("B");
root.addChild("C");
root.addChild("D");

const nodeB = root.children[0];
const nodeD = root.children[2];

nodeB.addChild("E");
nodeB.addChild("F");
nodeD.addChild("G");
nodeD.addChild("H");

const nodeF = nodeB.children[1];
nodeF.addChild("I");
nodeF.addChild("J");

const nodeG = nodeD.children[0];
nodeG.addChild("K");

describe("depthFirstSearch", () => {
  it("should return an array of names of all nodes in the tree, from left to right (pre-order)", () => {
    expect(root.depthFirstSearch([])).to.deep.equal([
      "A",
      "B",
      "E",
      "F",
      "I",
      "J",
      "C",
      "D",
      "G",
      "K",
      "H",
    ]);
  });
});
