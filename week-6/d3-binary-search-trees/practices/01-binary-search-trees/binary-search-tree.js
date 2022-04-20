// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    // Your code here
    this.root = null;
  }

  insert(val, currentNode = this.root) {
    // Your code here
    let newNode = new TreeNode(val);

    //if theres no root node, we assign the root node to a new instance of TreeNode
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    //create a loop
    while (true) {
      //if the current val > val 
      if (currentNode.val > val) {
        //and if the current node does not exist
        if (!currentNode.left) {
          //set the current node left equal to the newNode
          currentNode.left = newNode;
          return this;
        }
        //if there is a value, keep looping
        currentNode = currentNode.left
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }


  }



  search(val) {
    // Your code here
    if (!this.root) return false;
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.val > val) {
        currentNode = currentNode.left;
      } else if (currentNode.val < val) {
        currentNode = currentNode.right;
      } else if (currentNode.val === val) {
        return true;
      }
    }
    return false;
  }


  preOrderTraversal(currentNode = this.root) {
    // Your code here
    if (currentNode !== null) {
      console.log(currentNode.val)
      this.preOrderTraversal(currentNode.left);
      this.preOrderTraversal(currentNode.right);
    }
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
    if (currentNode !== null) {
      this.inOrderTraversal(currentNode.left);
      console.log(currentNode.val)
      this.inOrderTraversal(currentNode.right);
    }
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
    if (currentNode !== null) {
      this.postOrderTraversal(currentNode.left);
      this.postOrderTraversal(currentNode.right);
      console.log(currentNode.val)

    }
  }

  // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // Your code here
    let result = [];
    let queue = [];


    return result;
 
  }
  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // Your code here
  }
}

module.exports = {
  BinarySearchTree,
  TreeNode
};