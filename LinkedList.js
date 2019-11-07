//implementation of a generic node class
class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}
//The linked list has a head to indicate the beginning of the list
//The head always contains the 1st node.
class LinkedList {
  constructor() {
    this.head = null;
  }
  // Create a new node item
  // Point the head to that new node
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }
  //Create a new node item
  //Check to see if the list is empty, if it is, then insert the new item as the only item in the list
  //Start at the beginning of the list and move through the list until you reach the end of the list
  //Set the end node's next pointer to the new node
  //The new node's next pointer is null (indicating that the new node now is the last node on the list)
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }
  //Traverse the list, comparing the value stored in each node with the value you are searching. 
  //When the item is found, return the node. 
  find(item) { 
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item 
    while (currNode.value !== item) {
      /* Return null if it's the end of the list 
           and the item is not on the list */
      if (currNode.next === null) {
        return null;
      }
      else {
        // Otherwise, keep looking 
        currNode = currNode.next;
      }
    }
    // Found it
    return currNode;
  }
  // The 1st item in a list indicates the start of the list, which is indicated by head. 
  // If you delete the 1st item in a list, you need to change the head to indicate the new 1st item on the list. 
  // Otherwise, you find the node before the node you are removing and update its next pointer to skip over the removed node.
  remove(item){ 
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      // Save the previous node 
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
  insertBefore(item, key) {
    //if empty
    if (this.head === null) {
      console.log('Key is not found');
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;
    while((currNode !== null) && (key !== currNode.value)) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Key is not found');
      return;
    }
    previousNode.next = new _Node(item, currNode);
    
  }
  insertAfter(item, key){
    if (this.head === null) {
      console.log('Key is not found');
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;
    
    while((currNode !== null) && (key !== currNode.value)) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Key is not found');
      return;
    }
    currNode.next = new _Node(item, currNode.next);
  }

  insertAt(item, pos){
    if (this.head === null) {
      console.log('Key is not found');
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;
      
    for(let currPos = 1; currPos < pos; ++currPos){
      previousNode = currNode;
      currNode = currNode.next;
    }

    //this.insertBefore(item, currNode);
    //previousNode.next = new _Node(item, previousNode.next);
    previousNode.next = new _Node(item, currNode);
  }
}

function display(list) {
  console.log(JSON.stringify(list));
}

function size(list) {
  let nodeCounter = 1;
  if(list.head === null) {
    return console.log('Empty list');
  }
  let currentNode = list.head;
  while(currentNode.next !== null) {
    currentNode = currentNode.next;
    nodeCounter++;
  }
  return console.log(nodeCounter);
}
function isEmpty(list) {
  if(list.head === null) {
    return console.log('Empty list');
  }
  return console.log('List is not empty');
}

function findPrevious(list, item) {
  if(list.head === null) {
    return console.log('Empty list');
  }
  let currNode = list.head;
  let previousNode = list.head;
  while((currNode !== null) && (item !== currNode.value)) {
    previousNode = currNode;
    currNode = currNode.next;
  }
  if (currNode === null) {
    console.log('Key is not found');
    return;
  }
  return console.log(previousNode.value);
}

function findLast(list) {
  if(list.head === null) {
    return console.log('Empty list');
  }
  let previousNode = list.head;
  let currNode = list.head;
  while(currNode !== null) {
    previousNode = currNode;
    currNode = currNode.next;
  }
  return console.log(previousNode.value);
}

function main() {
  let SLL = new LinkedList();
  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  // SLL.insertLast('Husker');
  // SLL.insertLast('Starbuck');
  // SLL.insertFirst('Tauhida');
  //SLL.remove('squirell');
  // SLL.insertBefore('Athena', 'Boomer');
  // SLL.insertAfter('test', 'Boomer');
  // SLL.insertAt('Kat', 3);
  // SLL.remove('Tauhida');
  //display(SLL);
  // size(SLL);
  // isEmpty(SLL);
  // findPrevious(SLL, 'Boomer');
  // findPrevious(SLL, 'Turnip');
  findLast(SLL);
}

main();