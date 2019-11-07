const CycleList = {
  head: {
    value: 'Apollo',
    next: {
      value: 'Boomer',
      next: {
        value: 'Helo',
        next: { value: 'Husker', next: { value: 'Starbuck', next: CycleList.head } }
      }
    }
  }
};

function cycleList(list) {
  let currentNode = list.head;
  let previousNode = list.head;
  while(currentNode.value !== 'Test string') {
    if (currentNode.value === 'Test string') {
      console.log('Cycle detected');
      return;
    }
    if (currentNode.next === null) {
      console.log('No cycle detected');
      return;
    }
    previousNode = currentNode;
    currentNode.value = 'Test string';
    currentNode = currentNode.next;
  }
  
}
cycleList(CycleList);