import Heap from './Heap';

export default class MinHeap extends Heap {
  pairIsInCorrectOrder(firstElement, secondElement) {
    return firstElement > secondElement;
  }
}