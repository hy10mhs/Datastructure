const insertionSort = function (arr){
  let _arr = [...arr];
  let temp;
  
  for (let i = 1; i < _arr.length; i++) {
    temp = _arr[i];
    for (var j = i - 1; j >= 0 && temp < _arr[j]; j--) {
      _arr[j+1] = _arr[j];
    }
    _arr[j+1] = temp;
  }

  return _arr;
}

export default insertionSort;