import Heap from './Heap';

export default class MinHeap extends Heap {
  isInCorrectOrder(firstElement, secondElement) {
    return firstElement > secondElement;
  }
}