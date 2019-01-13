const partition = function (arr) {
  const pivotIndex = 0;
  let i = 0, j = arr.length;

  while (true) {
    do i++; while (arr[i] < arr[pivotIndex]);
    do j--; while (arr[j] > arr[pivotIndex]);

    if (i < j) [arr[i], arr[j]] = [arr[j], arr[i]];
    else break;
  }

  // pivot의 반대방향에서 오는 index와 바꿔야 함
  // pivot이 왼쪽 끝에 있는 경우 반대방향에서 오는 index는 j
  // pivot이 오른쪽 끝에 있는 경우 반대방향에서 오는 index는 i
  [arr[pivotIndex], arr[j]] = [arr[j], arr[pivotIndex]];

  return j;
}

const quickSort = function (arr) {
  if (arr.length <= 1) {
    return arr;
  } else {
    let _arr = [...arr];
    const partitionIndex = partition(_arr);
    return [...quickSort(_arr.slice(0, partitionIndex)), _arr[partitionIndex], ...quickSort(_arr.slice(partitionIndex+1))];
  }
};

export default quickSort;