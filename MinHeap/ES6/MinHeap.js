export default class MinHeap {
  constructor() {
    this.heapContainer = [];
  }

  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1
  }

  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  hasParent(childIndex) {
    return Math.ceil((this.heapContainer.length - 1) / 2) > this.getParentIndex(childIndex) && this.getParentIndex(childIndex) >= 0;
  }

  hasLeftChild(parentIndex) {
    return this.heapContainer.length > this.getLeftChildIndex(parentIndex);
  }

  hasRightChild(parentIndex) {
    return this.heapContainer.length > this.getRightChildIndex(parentIndex);
  }

  leftChild(parentIndex) {
    return this.heapContainer[this.getLeftChildIndex(parentIndex)];
  }

  rightChild(parentIndex) {
    return this.heapContainer[this.getRightChildIndex(parentIndex)];
  }

  parent(childIndex) {
    return this.heapContainer[this.getParentIndex(childIndex)];
  }

  /**
   * @param {number} indexOne
   * @param {number} indexTwo
   */
  swap(indexOne, indexTwo) {
    const temp = this.heapContainer[indexOne];
    this.heapContainer[indexOne] = this.heapContainer[indexTwo];
    this.heapContainer[indexTwo] = temp;
  }

  /**
   * @return {*}
   */
  peek() {
    return this.heapContainer[0];
  }

  /**
   * @return {*}
   */
  pop() {
    if (this.heapContainer.length === 0) {
      return null;
    }

    if (this.heapContainer.length === 1) {
      return this.heapContainer.pop();
    }

    const item = this.heapContainer[0];
    this.heapContainer[0] = this.heapContainer.pop();
    this.heapifiyDown();

    return item;
  }
    
  /**
   * @param {*} item
   * @return {Heap}
   */
  add(item) {
    this.heapContainer.push(item);
    this.heapifyUp();
    return this;
  }
    
  /**
   * @param {*} item
   * @return {Number[]}
   */
  find(item) {
    const foundItemIndices = [];
    for (let i=0; i < this.heapContainer.length; i++) {
      if (item === this.heapContainer[i]) {
        foundItemIndices.push(i);
      }
    }
    return foundItemIndices;
  }
    
  /**
   * @return {boolean}
   */
  isEmpty() {
    return this.heapContainer.length > 0
  }
  
  /**
   * @return {string}
   */
  toString() {
    return this.heapContainer.toString();
  }
    
  /**
   * @param {number} [customStartIndex]
   */
  heapifyUp(customStartIndex) {
    let currentIndex = customStartIndex || this.heapContainer.length - 1;

    while (this.hasParent(currentIndex) &&
      (this.parent(currentIndex) > this.heapContainer[currentIndex])) {
      swap(this.getParentIndex(currentIndex), currentIndex);
      currentIndex = this.getParentIndex(currentIndex);
    }
  }
    
  /**
   * @param {number} [customStartIndex]
   */
  heapifiyDown(customStartIndex = 0) {
    let currentIndex = customStartIndex;
    let childIndex;
    while (this.hasLeftChild(currentIndex)) {
      childIndex = this.getLeftChildIndex(currentIndex);
      if (this.hasRightChild(currentIndex)) {
        if (this.leftChild(currentIndex) > this.rightChild(currentIndex)) {
          childIndex = this.getRightChildIndex(currentIndex);
        }
      }

      if(this.heapContainer[childIndex] < this.heapContainer[currentIndex]) {
        swap(currentIndex, childIndex);
        currentIndex = childIndex;
      } else {
        break;
      }
    }
  } 
}