const selectionSort = function (arr) {
  let _arr = [...arr];
  let minIndex;

  for (let i = 0; i < _arr.length - 1; i++) {
    minIndex = i;

    for (let j = i+1; j < _arr.length; j++) {
      if (_arr[minIndex] > _arr[j]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [_arr[minIndex], _arr[i]] = [_arr[i], _arr[minIndex]];
    }
  }

  return _arr;
}

export default selectionSort;