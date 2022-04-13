class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // Your code here
    this.head = null;
    this.length = 0;
    this.tail = undefined;
  }

  addToHead(val) {
    // Your code here
    let node = new LinkedListNode(val);
    if(!this.head){
      this.head = node;
      this.tail = node;
    }else{
      let oldHead = this.head;
      this.head = node;
      this.head.next = oldHead;
    }
    this.length++;
  }

  addToTail(val) {
    // Your code here
    let node = new LinkedListNode(val);
    if(!this.tail){
      this.tail = this.head = node;
    } else {
      let oldTail = this.tail;;
      this.tail = node;
      oldTail.next = this.tail;
      this.tail.next = null;
    }
    this.length++;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}
linkedList = new LinkedList();

// linkedList.addToHead(1);
// linkedList.addToHead(2);
// linkedList.addToHead(3);
linkedList.addToTail(1);
linkedList.addToTail(2);
linkedList.addToTail(3);

console.log(linkedList.print());

module.exports = LinkedList;