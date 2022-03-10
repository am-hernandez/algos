# Depth-First Search

You are a given a `Node` class with properties of `name` and `children`, where `children` is an optional array of child nodes. The nodes and their children come together to form an acyclic graph.

Create a method on the Node class called `depthFirstSearch` that will implement the depth-first search method to traverse the graph. The method takes an empty array as an argument and should add the names of each node in the graph to the array as pre-order and return the array.

### Examples

**sample input**

```
graph = A
     /  |  \
    B   C   D
   / \     / \
  E   F   G   H
     / \   \
    I   J   K
```

```javascript
graph = {
  nodes: [
    { children: ["B", "C", "D"], id: "A", value: "A" },
    { children: ["E", "F"], id: "B", value: "B" },
    { children: [], id: "C", value: "C" },
    { children: ["G", "H"], id: "D", value: "D" },
    { children: [], id: "E", value: "E" },
    { children: ["I", "J"], id: "F", value: "F" },
    { children: ["K"], id: "G", value: "G" },
    { children: [], id: "H", value: "H" },
    { children: [], id: "I", value: "I" },
    { children: [], id: "J", value: "J" },
    { children: [], id: "K", value: "K" },
  ],
  startNode: "A",
};
```

**sample output**

```javascript
["A", "B", "E", "F", "I", "J", "C", "D", "G", "K", "H"];
```
