import PriorityQueue from './PriorityQueue';
import PriorityQueueElement from './PriorityQueueElement';

describe('PriorityQueue', () => {
  it('Queue test with priorities', () => {
    const priorityQueue = new PriorityQueue();

    priorityQueue.enqueue(new PriorityQueueElement(10, 1));
    priorityQueue.enqueue(new PriorityQueueElement(5, 2));
    priorityQueue.enqueue(new PriorityQueueElement(100, 0));
    
    expect(priorityQueue.dequeue().value).toBe(100);
    expect(priorityQueue.dequeue().value).toBe(10);
    expect(priorityQueue.dequeue().value).toBe(5);
  });
});