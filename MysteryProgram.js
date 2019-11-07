function WhatDoesThisProgramDo(lst) { //accepts list as an argument
  let current = lst.head; //assigns variable current to list's head(first item)
  while (current !== null) { //while we do not reach the end of the list
    let newNode = current; //assign variable newNode to current
    while (newNode.next !== null) { //while newNode is not the last node 
      if (newNode.next.value === current.value) { //compare the node we are on with a new node
        newNode.next = newNode.next.next; //remove the first duplicate value by setting the pointer to the second
      }
      else {
        newNode = newNode.next; //keep looking,
      }
    }
    current = current.next;
  }
}

/**
 * input A - B - B -  C - D
 * output 
 * 1. current = A
 * while A !== null
 * 2. newNode = A
 * while B !== null
 * 3. if B==A (false)           second iteration: if B==B (true)
 * 4. else A becomes B          second B  becomes C output: A - B - C - D
 * 5. current A becomes B
 */

// Time complexity of this algorithm is O(n^2) because we traverse list twice at the same time 