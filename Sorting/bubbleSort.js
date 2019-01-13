const bubbleSort = function (arr){
  let _arr = [...arr];
  let isComplete;
  
  for (let i = _arr.length - 1; i > 0; i--) {
    isComplete = true;

    for (let j = 0; j < i; j++) {
      if (_arr[j+1] < _arr[j]) {
        isComplete = false;
        [_arr[j+1], _arr[j]] = [_arr[j], _arr[j+1]];
      }
    }

    if (isComplete) break;
  }
  
  return _arr;
};

export default bubbleSort;