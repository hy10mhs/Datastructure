export default class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  /**
   * @param {PriorityQueueElement}
   * @return {PriorityQueue}
   */
  enqueue(element) {
    let i = 0;
    for (; i < this.queue.length; i++) {
      if (this.queue[i].priority > element.priority) {
        this.queue.splice(i, 0, element);
        break;
      }
    }
    if (i === this.queue.length) {
      this.queue.push(element);
    }
    
    return this;
  }

  /**
   * @return {PriorityQueueElement}
   */
  dequeue() {
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  /**
   * @return {Array}
   */
  toArray() {
    return [...this.queue];
  }
}