const merge = function (arr1, arr2) {
  let arr = [];
  let i = 0, j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      arr.push(arr2[j]);
      j++;
    } else {
      arr.push(arr1[i]);
      i++;
    }
  }

  if (i === arr1.length) {
    arr = [...arr, ...arr2.slice(j)];
  } else {
    arr = [...arr, ...arr1.slice(i)];
  }

  return arr;
}

const mergeSort = function (arr) {
  const mid = Math.floor(arr.length / 2);

  if (arr.length === 1) {
    return arr;
  } else {
    return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)))
  }
};

export default mergeSort;
