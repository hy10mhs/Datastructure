import LinkedList from '../../LinkedList/ES6/LinkedList';
import LinkedListNode from '../../LinkedList/ES6/LinkedListNode';

export default class Stack {
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
  push(value) {
    this.linkedList.prepend(new LinkedListNode(value));
  }

  /**
   * @return {*}
   */
  pop() {
    const removedHead = this.linkedList.deleteHead();
    return removedHead ? removedHead.value : null;
  }

  /**
   * @return {*[]}
   */
  toArray() {
    return this.linkedList.toArray();
  }
}