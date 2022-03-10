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

  depthFirstSearch(array) {
    array.push(this.name);
    for (let child of this.children) {
      child.depthFirstSearch(array);
    }
    return array;
  }
}

/* ITERATIVE APPROACH */
// class Node {
//   constructor(name) {
//     this.name = name;
//     this.children = [];
// 		this.visited = false;
//   }

//   addChild(name) {
//     this.children.push(new Node(name));
//     return this;
//   }

//   depthFirstSearch(array) {
//     // Write your code here.
// 		let stack = [this];
// 		while(stack.length > 0){
// 			let node = stack.pop();
// 			if(node.visited === false){
// 				node.visited = true;
// 				array.push(node.name);
// 				for(let i = node.children.length-1; i >= 0; i--){
// 					if(node.children[i].visited === false){
// 						stack.push(node.children[i]);
// 					}
// 				}
// 			}
// 		}
// 		return array;
//   }
// }

module.exports = Node;
