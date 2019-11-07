function reverse(lst) { 
  let current =  lst.head; 
  let previous;
  let next;
  if(lst.head === null){
    return console.log('empty list');
  }
  while (current !== null) {
    next = current.next; //store what comes after current
    current.next = previous; //point current to previous
    previous = current; //
    current = next;

    while (newNode.next !== null) { 
      if (newNode.next.value === current.value) { 
        newNode.next = newNode.next.next; 
      }
      else {
        newNode = newNode.next; 
      }
    }
    current = current.next;
  }
}

/**

 */

// Time complexity of this algorithm is...


//A > B > C > D > E

//null < A   B > C ...
//null < A 
