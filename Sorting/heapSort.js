import MinHeap from '../Heap/ES6/MinHeap';

const heapSort = function (arr){
  let _arr = [];
  const minHeap = new MinHeap();
  arr.forEach(item => minHeap.add(item));

  while (!minHeap.isEmpty()) {
    _arr = [..._arr, minHeap.pop()];
  }

  return _arr;
};

export default heapSort;