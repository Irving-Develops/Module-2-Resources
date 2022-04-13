class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    // Your code here
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    // Your code here
    const node = new DoublyLinkedListNode(val);
    if(this.head === null){
      this.head = node;
      this.tail= node;
    } else {
      let oldHead = this.head;
      this.head = node;
      oldHead.prev = this.head;
      this.head.next = oldHead;
    }
    this.length++;
  }

  addToTail(val) {
    // Your code here
    const node = new DoublyLinkedListNode(val);
    if(!this.tail){
      this.head = this.tail = node;
    } else {
      let oldTail = this.tail;
      this.tail = node;
      oldTail.next = this.tail;
      this.tail.prev = oldTail;
    }
    this.length++;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}
let list = new DoublyLinkedList();
// list.addToHead(1);
// list.addToHead(2);
// list.addToHead(3);

list.addToTail(1);
list.addToTail(2);
list.addToTail(3);

console.log(list.print())

module.exports = DoublyLinkedList;