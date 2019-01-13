export default class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * @param {DoublyLinkedListNode}
   * @return {DoublyLinkedList}
   */
  append(node) {
    if (!this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }

    return this;
  }

  /**
   * @param {DoublyLinkedListNode}
   * @return {DoublyLinkedList}
   */
  prepend(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }

    return this;
  }

  /**
   * @param {Function} callback(DoublyLinkedListNode.value, value)
   * @return {DoublyLinkedListNode}
   */
  find(callback, value) {
    let curNode = this.head;
    while ( curNode ) {
      if ( callback(curNode.value, value) ) {
        return curNode;
      }
      curNode = curNode.next;
    }
  }

  /**
   * @param {*} value
   * @return {DoublyLinkedList}
   */
  delete(value) {
    let curNode = this.head;

    while (curNode) {
      if (curNode.value === value) {
        if (curNode !== this.head && curNode !== this.tail) {
          curNode.next.prev = curNode.prev;
          curNode.prev.next = curNode.next;
        } else {
          if (curNode === this.head) {
            this.head = this.head.next;
            if (this.head) {
              this.head.prev = null;
            }
          }
  
          if (curNode === this.tail) {
            this.tail = this.tail.prev;
            if (this.tail) {
              this.tail.next = null;
            }
          }
        }
        
        break;
      }

      curNode = curNode.next;
    }

    return this;
  }

  /**
   * @return {DoublyLinkedListNode}
   */
  deleteHead() {
    if (!this.head) return null;

    const deletedNode = this.head;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }

    return deletedNode;
  }

  /**
   * @return {DoublyLinkedListNode}
   */
  deleteTail() {
    if (!this.tail) return null;

    const deletedNode = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    return deletedNode;
  }

  /**
   * @returns {DoublyLinkedList}
   */
  reverse() {
    let prev = null;
    let cur = this.head;

    while (cur) {
      prev = cur;
      cur = cur.next;
      [prev.next, prev.prev] = [prev.prev, prev.next];
    }

    [this.head, this.tail] = [this.tail, this.head];

    return this;
  }

  /**
   * @return {Number}
   */
  length() {
    let curNode = this.head;
    let length = 0;
    while (curNode) {
      length++;
      curNode = curNode.next;
    }

    return length;
  }

  /**
   * @return {Array}
   */
  toArray() {
    let curNode = this.head;
    let values = [];
    while (curNode) {
      values.push(curNode.value);
      curNode = curNode.next;
    }
    return values;
  }
}