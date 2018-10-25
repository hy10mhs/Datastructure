/*
 * Index sequential search
 */
let list = [1,4,5,7,9,10,13,16];
let indexTableSize = 3;
let indexTable = list.reduce((t, item, index) => {
  if (index % indexTableSize === 0) {
    t.push({
      key: index,
      value: item
    });
  }

  return t;
}, []);

function indexSequentialSearch(list, indexTable, value) {
  let i, j, left, right;
  for (i = 0; i < indexTable.length; i++) {
    if (indexTable[i].value === value) {
      return IndexTable[i].key;
    }
    if (indexTable[i].value > value) break;
  }

  if (i === indexTable.length) {
    left = indexTable[indexTable.length - 1].key;
    right = indexTable.length;
  } else if (i === 0) {
    return -1;
  } else {
    left = indexTable[i-1].key + 1;
    right = indexTable[i].key;
  }

  for (i = left; i < right; i++) {
    if (list[i] === value) return i;
  }
  
  if (i === right) return -1;
}

console.log(indexSequentialSearch(list, indexTable, 10));


/*
 * Binary search
 */  
function recursiveBinarySearch(list, value, left, right) {
  if (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (list[mid] === value) {
      return mid;
    } else if (list[mid] < value) {
      return recursiveBinarySearch(list, value, mid+1, right);
    } else {
      return recursiveBinarySearch(list, value, left, mid - 1);
    }
  }

  return -1;
}

function iterativeBinarySearch(list, value) {
  let mid, left = 0, right = list.length - 1;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (list[mid] === value) {
      return mid;
    } else if (list[mid] < value) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

console.log(
  recursiveBinarySearch([1,4,5,7,9,10], 2, 0, 5),
  iterativeBinarySearch([1,4,5,7,9,10], 2, 0, 5),
  recursiveBinarySearch([1,4,5,7,9,10], 7, 0, 5),
  iterativeBinarySearch([1,4,5,7,9,10], 7, 0, 5)
);


/*
 * Interpolation search
 */

/*
 * AVL-tree
 */

/*
 * B-tree
 */

/*
 * 2-3-4 tree
 */

/*
 * Red-Black tree
 */