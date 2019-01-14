import LinkedList from '../../LinkedList/ES6/LinkedList';
import LinkedListNode from '../../LinkedList/ES6/LinkedListNode';

export default class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }

  /**
   * @return {boolean}
   */
  isEmpty() {
    return !this.linkedList.head;
  }

  /**
   * @return {*}
   */
  peek() {
    return this.linkedList.head ? this.linkedList.head.value : null;
  }

  /**
   * @param {*} value
   */
  enqueue(value) {
    this.linkedList.append(new LinkedListNode(value));
  }

  /**
   * @return {*}
   */
  dequeue() {
    const removedHead = this.linkedList.deleteHead();
    return removedHead ? removedHead.value : null;
  }

  /**
   * @return {Array}
   */
  toArray() {
    return this.linkedList.toArray();
  }
}