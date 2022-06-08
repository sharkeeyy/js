class Node {
    constructor(value, nodeList) {
      this.value = value;
      this.nodeList = nodeList;
    }
}

function goTreeStraigth(tree) {
    let result = [];

    function getNextNode(node) {
        result.push(node.value);
        
        if (node.nodeList === null) return;
        
        for (let child of node.nodeList) {
            getNextNode(child);
        } 
    }

    getNextNode(tree);
    return result;
}

let tree = new Node(1, [
    new Node(2, [new Node(1, null), new Node(1, null)]),
    new Node(3, [new Node(1, null)]),
    new Node(4, [new Node(1, null), new Node(1, null), new Node(1, null)]),
]);
   
console.log(goTreeStraigth(tree));