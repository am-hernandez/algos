const { expect } = require("chai");
const Node = require("./breadthFirstSearch");

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

describe("breadthFirstSearch", () => {
  it("should return an array of names of all nodes in the graph, from left to right (pre-order)", () => {
    expect(root.breadthFirstSearch([])).to.deep.equal([
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
    ]);
  });
});
