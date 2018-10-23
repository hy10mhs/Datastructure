import MinHeap from './MinHeap';
import MaxHeap from './MaxHeap';

const minHeap = new MinHeap();
const maxHeap = new MaxHeap();

describe('MinHeap', () => {
    it('add 1', () => {
        expect(minHeap.add(1).toArray()).toEqual([1]);
    })
    it('add 3', () => {
      expect(minHeap.add(3).toArray()).toEqual([1,3]);
    })
    it('add 5', () => {
      expect(minHeap.add(5).toArray()).toEqual([1,3,5]);
    })
    it('add 7', () => {
      expect(minHeap.add(7).toArray()).toEqual([1,3,5,7]);
    })
    it('add 6', () => {
      expect(minHeap.add(6).toArray()).toEqual([1,3,5,7,6]);
    })
    it('add 4', () => {
      expect(minHeap.add(4).toArray()).toEqual([1,3,4,7,6,5]);
    })
    it('add 2', () => {
      expect(minHeap.add(2).toArray()).toEqual([1,3,2,7,6,5,4]);
    })
    it('pop', () => {
      expect(minHeap.pop()).toEqual(1);
    })
    it('pop', () => {
      expect(minHeap.pop()).toEqual(2);
    })
    it('pop', () => {
      expect(minHeap.pop()).toEqual(3);
    })
    it('pop', () => {
      expect(minHeap.pop()).toEqual(4);
    })
    it('pop', () => {
      expect(minHeap.pop()).toEqual(5);
    })
    it('pop', () => {
      expect(minHeap.pop()).toEqual(6);
    })
    it('pop', () => {
      expect(minHeap.pop()).toEqual(7);
    })
});

describe('MaxHeap', () => {
  it('add 1', () => {
      expect(maxHeap.add(1).toArray()).toEqual([1]);
  })
  it('add 3', () => {
    expect(maxHeap.add(3).toArray()).toEqual([3,1]);
  })
  it('add 5', () => {
    expect(maxHeap.add(5).toArray()).toEqual([5,1,3]);
  })
  it('add 7', () => {
    expect(maxHeap.add(7).toArray()).toEqual([7,5,3,1]);
  })
  it('add 6', () => {
    expect(maxHeap.add(6).toArray()).toEqual([7,6,3,1,5]);
  })
  it('add 4', () => {
    expect(maxHeap.add(4).toArray()).toEqual([7,6,4,1,5,3]);
  })
  it('add 2', () => {
    expect(maxHeap.add(2).toArray()).toEqual([7,6,4,1,5,3,2]);
  })
  it('pop', () => {
    expect(maxHeap.pop()).toEqual(7);
  })
  it('pop', () => {
    expect(maxHeap.pop()).toEqual(6);
  })
  it('pop', () => {
    expect(maxHeap.pop()).toEqual(5);
  })
  it('pop', () => {
    expect(maxHeap.pop()).toEqual(4);
  })
  it('pop', () => {
    expect(maxHeap.pop()).toEqual(3);
  })
  it('pop', () => {
    expect(maxHeap.pop()).toEqual(2);
  })
  it('pop', () => {
    expect(maxHeap.pop()).toEqual(1);
  })
});
