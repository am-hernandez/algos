/* RECURSIVE APPROACH */
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array) {
    let queue = [this];
    while (queue.length > 0) {
      const node = queue.shift();
      array.push(node.name);
      for (let i = 0; i < node.children.length; i++) {
        queue.push(node.children[i]);
      }
    }
    return array;
  }
}

/* ITERATIVE APPROACH */
// class Node {
//   constructor(name) {
//     this.name = name;
//     this.children = [];
//   }

//   addChild(name) {
//     this.children.push(new Node(name));
//     return this;
//   }

//   breadthFirstSearch(array) {
//     let queue = [this];
//     while (queue.length > 0) {
//       const currentNode = queue.shift();
//       array.push(currentNode.name);
//       for (let i = 0; i < currentNode.children.length; i++) {
//         queue.push(currentNode.children[i]);
//       }
//     }
//     return array;
//   }
// }

module.exports = Node;
