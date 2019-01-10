export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /*
   *  @param {LinkedListNode}
   *  return {LinkedList}
   */
  append(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    return this;
  }

  /*
   *  @param {LinkedListNode}
   *  return {LinkedList}
   */
  prepend(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    return this;
  }

  /**
   * @param {Function} callback(LinkedListNode.value, value)
   * return {LinkedListNode}
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

  /*
   *  @param {LinkedListNode}
   *  @param {Number} index
   *  return {LinkedList}
   */
  insert(node, index) {
    if (index < 0) {
      throw new Error('index can\'t be less than 0');
    } else if (index === 0 || this.head === null) {
      return this.prepend(node);
    } else {
      let curNode = this.head;

      for (let i = 0; i < index - 1; i++) {
        if (curNode.next === null) {
          return this;
        }
        curNode = curNode.next;
      }

      node.next = curNode.next;
      curNode.next = node;

      return this;
    }
  }

  /*
   *  @param {value}
   *  return {LinkedList}
   */
  delete(value) {
    let prevNode = null;
    let curNode = this.head;
    while (curNode) {
      if (curNode.value === value) {
        if (curNode === this.head) {
          this.head = this.head.next;
        } else {
          prevNode.next = curNode.next;
        }
        break;
      }
      prevNode = curNode;
      curNode = curNode.next;
    }

    return this;
  }

  /*
   * return {LinkedList}
   */
  reverse() {
    let prev = null;
    let mid = null;
    let next = this.head;

    while (next) {
      prev = mid;
      mid = next;
      next = next.next;

      mid.next = prev;
    }

    this.tail = this.head;
    this.head = mid;

    return this;
  }

  /*
   * return {Number}
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

  /*
   * return {Array}
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