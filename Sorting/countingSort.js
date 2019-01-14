const countingSort = function (arr){
  let _arr = [];
  let count = [];
  let acc = 0;

  for (let i = 0; i < arr.length; i++) {
    count[arr[i]] = (count[arr[i]] || 0) + 1;
  }

  for (let key in count) {
    acc += count[key];
    count[key] = acc;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    _arr[--count[arr[i]]] = arr[i];
  }
  
  return _arr;
};

export default countingSort;