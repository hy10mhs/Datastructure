import Heap from './Heap';

export default class MaxHeap extends Heap {
  isInCorrectOrder(firstElement, secondElement) {
    return firstElement < secondElement;
  }
}